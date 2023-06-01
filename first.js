function myFunction(e){
    let arr=[];
    let element=e.target;
    element=element.closest("div");
    let img_src_tobeshown=element.childNodes[0].src;
    let trgt_element=document.querySelector(".flex-item-right").childNodes[0];

    if(img_src_tobeshown==undefined)
        return;
    trgt_element.src=img_src_tobeshown;
    
}

let images_list=[];
images_list=document.querySelectorAll(".textup");
images_list.forEach(apply_center_ellipsis);

function apply_center_ellipsis(ele,index){

    console.log(index);

    let element_text=ele.textContent;
    let target_width =ele.clientWidth; // line width
    let text = element_text;

    let span = document.createElement('span');
    document.querySelector(".tab11").appendChild(span);
    span.style.whiteSpace = 'nowrap';
    // define the style

    let fit = text.length;

    console.log(`width:${ele.clientWidth} textt:${ele.textContent} lebgth::${fit}`);
    let isoverflow=false;
    let lenallowed=Infinity;
    for (var i = 0; i < fit; ++i)
    {
        span.innerHTML += text[i];
        if (span.clientWidth > target_width) {
            lenallowed=i;
            break;
        }
    }

    document.querySelector(".tab11").removeChild(span);

    let number_of_lines=fit/lenallowed;

    console.log(`no.ofline:${number_of_lines} lenin1line:${lenallowed}`);

    if(number_of_lines<=2){return;}
    else{
        console.log("ellipses required;");
    }

    lenallowed-=15;
    final_text=element_text.substring(0,lenallowed+1);
    console.log(`text1:${final_text}`)
    final_text+=" ... ";
    console.log(`text2:${final_text}`)
    final_text+=element_text.substring(fit-lenallowed,fit);
    console.log(`text3:${final_text}`)

    console.log(`finaltext:${final_text}`);


    ele.innerHTML=final_text;



}





