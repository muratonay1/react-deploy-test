// services/GetUserDocs.js
import PocketFirestore from '../Pocket/PocketFirestore';
import PocketLocalService from '../Pocket/PocketLocalService';
import PocketQueryFilter from '../Pocket/PocketQueryFilter';

/**
 *
 * @param {Pocket} criteria
 */
const GetUserMenuDetail = async (criteria) => {
     try {

          let filter = new PocketQueryFilter();
          filter.add("unique", criteria.menuList).operator("in");

          let dbRef = new PocketFirestore();

          // dbRef.Search işlemini bir Promise içinde sar
          const searchResult = await new Promise((resolve, reject) => {
               dbRef.Search({
                    collection: "Menu",
                    where: filter,
                    done: resolve, // Başarılı sonuç için resolve fonksiyonunu kullan
                    fail: reject  // Hata durumu için reject fonksiyonunu kullan
               });
          });

          return searchResult; // Başarılı sonucu döndür
     } catch (error) {
          console.error('GetUserDocs hata:', error);
          throw error;
     }
};

export default GetUserMenuDetail;
