
import {picturesMongo} from "./../pictures.js";
import picturesDefaults from "./pictures.defaults.js";


loadPictures = function(){
	 if (picturesMongo.find({}).fetch().length === 0) {
		 picturesDefaults.forEach((item, index)=>{
	     	picturesMongo.insert(picturesDefaults[index]); 
		 })
   }
}
    