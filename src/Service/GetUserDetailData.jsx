// services/GetUserDocs.js
import PocketFirestore from '../Pocket/PocketFirestore';
import PocketLocalService from '../Pocket/PocketLocalService';
import PocketQueryFilter from '../Pocket/PocketQueryFilter';
import Pocket from '../Pocket/Pocket';
/**
 *
 * @param {Pocket} criteria
 */
const GetUserDocs = async (criteria) => {
     try {
          PocketLocalService.parameterMustBeFill(criteria, "name");

          let filter = new PocketQueryFilter();
          filter.add("name", "murat").operator("==");

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
          let searchResultBag = searchResult[0];
          let menuList = searchResultBag.menu;

          let pocket = new Pocket();

          pocket.put("menuList", menuList);

          const responseMenu = await new Promise((resolve, reject) => {
               PocketLocalService.executeService("GetUserMenuDetail", pocket, (response) => {
                    resolve(response);
               }, (error) => {
                    reject(error);
               });
          });

          searchResultBag["menuResponseMerged"] = {};

          Object.assign(searchResultBag.menuResponseMerged, responseMenu);

          return searchResultBag;

          // Başarılı sonucu döndür
     } catch (error) {
          console.error('GetUserDocs hata:', error);
          throw error;
     }
};

export default GetUserDocs;
