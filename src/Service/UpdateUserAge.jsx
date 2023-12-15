// services/GetUserDocs.js
import PocketFirestore from '../Pocket/PocketFirestore';
import PocketLocalService,{execute} from '../Pocket/PocketLocalService';
/**
 *
 * @param {Pocket} criteria
 */
const UpdateUserAge = execute(
     async (criteria) => {
          try {
               PocketLocalService.parameterMustBeFill(criteria,"_id");
               PocketLocalService.parameterMustBeFill(criteria,"age");

               let dbRef = new PocketFirestore();

               // dbRef.Search işlemini bir Promise içinde sar
               const updateResult = await new Promise((resolve, reject) => {
                    dbRef.Update({
                         collection: "Users",
                         data: criteria,
                         done: resolve, // Başarılı sonuç için resolve fonksiyonunu kullan
                         fail: reject  // Hata durumu için reject fonksiyonunu kullan
                    });
               });

               return updateResult;

          } catch (error) {
               console.error('UpdateUser hata:', error);
               throw error;
          }
     }
)

export default UpdateUserAge;
