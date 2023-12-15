// services/GetUserDocs.js
import PocketFirestore from '../Pocket/PocketFirestore';
import PocketLocalService from '../Pocket/PocketLocalService';
import PocketQueryFilter from '../Pocket/PocketQueryFilter';
/**
 *
 * @param {Pocket} criteria
 */
const GetUserByUserName = async (criteria) => {
     try {

          PocketLocalService.parameterMustBeFill(criteria, "userName");

          let dbRef = new PocketFirestore();

          let filter = new PocketQueryFilter();

          filter.add("userName",criteria.get("userName",""));

          const searchResult = await new Promise((resolve, reject) => {
               dbRef.Search({
                    collection: "Users",
                    where: filter,
                    done: resolve, // Başarılı sonuç için resolve fonksiyonunu kullan
                    fail: reject  // Hata durumu için reject fonksiyonunu kullan
               });
          });

          let searchResultBag = searchResult[0];

          return searchResultBag;

          // Başarılı sonucu döndür
     } catch (error) {
          console.error('GetUserDocs hata:', error);
          throw error;
     }
};

export default GetUserByUserName;
