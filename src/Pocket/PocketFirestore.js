import { collection, getDocs, updateDoc, query, where, doc, runTransaction } from 'firebase/firestore';

import { firestore } from '../firestoreAccount.js';

export default class FirestoreManager {
    // ...

    async Search(params) {
        const collectionName = params.collection;
        const whereFilters = JSON.parse(JSON.stringify(params.where.query));
        const done = params.done;
        const fail = params.fail;

        try {
            const collectionRef = collection(firestore, collectionName);
            let queryConstraints = [];

            // where filtrelerini uygula
            if (whereFilters) {
                queryConstraints = this.applyWhereFilters(whereFilters);
            }

            const querySnapshot = await getDocs(query(collectionRef, ...queryConstraints));
            let results = [];

            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                results.push(userData);
            });

            done(results);
        } catch (error) {
            fail(error);
        }
    }
    async Update(params) {
        const collectionName = params.collection;
        const updateData = params.data;
        const docId = updateData["_id"]; // Güncellenecek dokümanın ID'si
        const docRef = doc(firestore, collectionName, docId);
        const done = params.done;
        const fail = params.fail;

        try {
            await runTransaction(firestore, async (transaction) => {
                // Dokümanı oku (isterseniz)
                const snapshot = await transaction.get(docRef);
                if (!snapshot.exists()) {
                    throw "Transaction aborted rollback successfully";
                }

                // Güncelleme işlemini yap
                transaction.update(docRef, JSON.parse(JSON.stringify(updateData)));
            });

            // İşlem başarılı
            done(true);
        } catch (error) {
            // Hata oluştu
            fail(error);
        }
    }

    // ...

    applyWhereFilters(whereFilters) {
        const operators = ['>', '<', '>=', '<=', '==', '!=', 'in']; // Desteklenen operatörler
        let queryConstraints = [];

        for (let field in whereFilters) {
            if (whereFilters.hasOwnProperty(field)) {
                let condition = whereFilters[field];
                if (typeof condition === 'object' && Object.keys(condition).length === 1) {
                    const operator = Object.keys(condition)[0];
                    const value = condition[operator];
                    if (operators.includes(operator)) {
                        queryConstraints.push(where(field, operator, value));
                    }
                } else {
                    queryConstraints.push(where(field, '==', condition));
                }
            }
        }
        return queryConstraints;
    }

}
