const imgELement = document.getElementById("content") 
imgELement.addEventListener('click',contentClick)
//  Fetch the page data. The page data is set with two main indexs. Warren and Axel. Each index will hold all the specfic data related to the pages content and which kids art we want
async function getPagedata(){
  try { 
    const response = await fetch('/data.json')
    if(!response.ok){
       throw new Error(response.status)
    }

    const data = await response.json()
    return data
    } catch (error) {
      console.error('Error loading JSON:', error);
      return []
  }
}
// Take our fetched data and seperate out the family cat picks
async function getFamilyList(){
    const pageData = await getPagedata()
    const catFamilyImgArray = []
    for(let i = 0; i < 3; i ++){
        let catPic = (pageData["Warren"]["content"]["art"][i])
        catFamilyImgArray.push(catPic)
    }

    return catFamilyImgArray

}
let imgIndexState = 0

async function contentClick(){
    console.log(imgIndexState)
    const warrenData = await getFamilyList();
    imgIndex = imgIndexState
    console.log(imgIndex)
    if(imgIndex === warrenData.length - 1){
        imgIndex = 0
        imgELement.name = imgIndex;
        console.log(imgELement.name)
        imgELement.src = `./${warrenData[imgIndex]}`
        console.log(imgELement.src)
        imgIndexState = imgIndex}
    else{
        imgIndex++
        imgELement.name = imgIndex;
        imgELement.src = `./${warrenData[imgIndex]}`
        console.log(imgELement.src)
        imgIndexState = imgIndex
}        
}
