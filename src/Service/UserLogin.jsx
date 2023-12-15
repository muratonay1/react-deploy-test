// services/GetUserDocs.js

import PocketFirestore from '../Pocket/PocketFirestore';
import PocketLocalService,{execute} from '../Pocket/PocketLocalService';
import PocketQueryFilter from '../Pocket/PocketQueryFilter';
import Pocket from '../Pocket/Pocket';

/**
 *
 * @param {Pocket} criteria
 */
const UserLogin = execute(async (criteria) => {
     try {
          PocketLocalService.parameterMustBeFill(criteria, "userName");
          PocketLocalService.parameterMustBeFill(criteria, "password");

          let filter = new PocketQueryFilter();

          filter.add("userName", criteria.get("userName", "")).operator("==");
          filter.add("password", criteria.get("password", "")).operator("==");

          let dbRef = new PocketFirestore();

          // dbRef.Search işlemini bir Promise içinde sar
          const searchResult = await new Promise((resolve, reject) => {
               dbRef.Search({
                    collection: "Users",
                    where: filter,
                    done: resolve, // Başarılı sonuç için resolve fonksiyonunu kullan
                    fail: reject  // Hata durumu için reject fonksiyonunu kullan
               });
          });

          throw new Error("Update işleminde hata meydana geldi");

          return searchResult;

     } catch (error) {
          console.error('GetUserDocs hata:', error);
          throw error;
     }
})

export default UserLogin;
