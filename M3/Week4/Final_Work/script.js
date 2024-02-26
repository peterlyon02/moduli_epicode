function createRows(){
    let list=['Trending Now', 'Watch It Again', 'New Releases'];
                let i=0;
                
                while(i<list.length){
                    var div_main=document.getElementById('div_main');
                    var row_title=document.createElement('div');
                    row_title.classList.add('row', 'row_title');
                    var col_title=document.createElement('div');
                    col_title.classList.add('col-2');
                    var box=document.createElement('div');
                    box.classList.add('box_name');
                    box.innerHTML=list[i];
                    col_title.append(box);
                    row_title.append(col_title);
                    div_main.append(row_title);

                    var rowContainer = document.createElement('div');
                    rowContainer.classList.add('row', 'row_style');
                    let j=0;
                    while(j<18){
                        var col= document.createElement('div');
                        col.classList.add('col-2');
                        var imageContainer=document.createElement('div')
                        imageContainer.classList.add('image-container');
                        var image=document.createElement('img')
                        image.classList.add("img-fluid", "hover-zoom")
                        image.src='./assets/imgs/movies/'+(j+1)+'.png'
                        imageContainer.append(image)
                        col.append(imageContainer);
                        rowContainer.append(col)
                        j+=1
                        
                    }
                    div_main.append(rowContainer)
                    i+=1
                }
}

createRows()