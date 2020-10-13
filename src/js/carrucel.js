// variable que cuenta la imagen que se esta mostrando    
var contador_Imagen_Seleccionada=1;
//variable que cuenta el contenedor en el que se esta mostrando la imagen
var contador_div_seleccionado=1;
//variable que se inicializa con el numero de la cantidad maxima de imagenes a iterar
var contador_Cantidad_De_Imagenes=0;
//variable que indica el numero con la cantidad 
var contador_Cantidad_De_Imagenes_Minima=1;
// nombre de la img presionada
var Nombre_IMG_Global="";


var contadorclick = 0;


    // A $( document ).ready() block. Se ejecuta una vez qeu cargo toda la pagina
    $( document ).ready(function() {
    
        //funcion asincronica esperando se ejecute el desplazamiento del carrucel 
        $('#myCarousel').on('slide.bs.carousel', function (e) {
   

            
                if(e.direction=="left"){
                    Next(e)
                } else{
                    Prev(e)
                }

          })


    });


    function ocultar_o_mostrar_Carrucel(Nombre_IMG,Cantidad_De_Imagenes){       
        Nombre_IMG_Global = Nombre_IMG;
        contador_Cantidad_De_Imagenes = Cantidad_De_Imagenes; 

        var elemento_Div_Fondo_Contenedor = document.getElementById("Fondo_contenedor");
        var div_img_seleccionado = document.getElementById("img_contenedor"+contador_div_seleccionado);    
        var ocultar_MarginMainContent = document.getElementById("main-content");
    
        contador_Imagen_Seleccionada=1;

        if (elemento_Div_Fondo_Contenedor.style.display == "none") {
            elemento_Div_Fondo_Contenedor.style.display = "flex";
            $("#Fondo_contenedor").animate({
                opacity: "1",   
            });

            div_img_seleccionado.setAttribute("src","../image/productos/"+Nombre_IMG+"/"+Nombre_IMG+"1.jpg");        
            ocultar_MarginMainContent.style.marginTop = "0";    
        } else {
            elemento_Div_Fondo_Contenedor.style.display = "none";
            elemento_Div_Fondo_Contenedor.style.opacity = 0;
            ocultar_MarginMainContent.style.marginTop = "7.4vh";   
        }            

    }
 
  

    function Next(e){
        contador_div_seleccionado=e.from+1;

        //estas variables localizan los elementos contenedores de las imagenes       
        var div_contenedor_img_1 = document.getElementById("img_contenedor1");
        var div_contenedor_img_2 = document.getElementById("img_contenedor2");
        var div_contenedor_img_3 = document.getElementById("img_contenedor3"); 
      
 
        
        //este contador es el numero de la nueva imagen a cargar en el carrrucel si se presiona next (flecha derecha)
        var contador_Carga_De_Siguiente_Imagen=contador_Imagen_Seleccionada+1;

        //funcion para cargar la priemr imagen como la siguiente imagen en caso de haber llegado a la ultima imagen
        if(contador_Carga_De_Siguiente_Imagen>contador_Cantidad_De_Imagenes){
            contador_Carga_De_Siguiente_Imagen=contador_Cantidad_De_Imagenes_Minima;
        }
        
        


        
        contadorclick++;
        //checar en que div estamos y en base a eso cargar la imagenes del div al que nos dirigimos
        if(contador_div_seleccionado==1){
                div_contenedor_img_2.setAttribute("src","../image/productos/"+Nombre_IMG_Global+"/"+Nombre_IMG_Global+contador_Carga_De_Siguiente_Imagen+".jpg");

            }


        if(contador_div_seleccionado==2){
                div_contenedor_img_3.setAttribute("src","../image/productos/"+Nombre_IMG_Global+"/"+Nombre_IMG_Global+contador_Carga_De_Siguiente_Imagen+".jpg");
            }


        if(contador_div_seleccionado==3){
                div_contenedor_img_1.setAttribute("src","../image/productos/"+Nombre_IMG_Global+"/"+Nombre_IMG_Global+contador_Carga_De_Siguiente_Imagen+".jpg");

            }


        //estas funciones hacen que el carrucel al llegar a la ultima imagen, se regrese a la primera
        if(contador_div_seleccionado<3){
            contador_div_seleccionado++;
        }else{
            contador_div_seleccionado=contador_Cantidad_De_Imagenes_Minima;
        }
        
        if(contador_Imagen_Seleccionada<contador_Cantidad_De_Imagenes){
            contador_Imagen_Seleccionada++;
        }else{
            contador_Imagen_Seleccionada=contador_Cantidad_De_Imagenes_Minima;
        }

    }//termino de funcion next


    function Prev(e){
        contador_div_seleccionado=e.from+1;

        //estas variables localizan los elementos contenedores de las imagenes       
        var div_contenedor_img_1 = document.getElementById("img_contenedor1");
        var div_contenedor_img_2 = document.getElementById("img_contenedor2");
        var div_contenedor_img_3 = document.getElementById("img_contenedor3"); 




        //este contador es el numero de la nueva imagen a cargar en el carrrucel si se presiona prev (flecha izquierda)
        var contador_Carga_De_Anterior_Imagen=contador_Imagen_Seleccionada-1;

        //funcion para cargar la ultima imagen como la siguiente imagen en caso de haber llegado a la primera imagen
        if(contador_Carga_De_Anterior_Imagen<contador_Cantidad_De_Imagenes_Minima){
            contador_Carga_De_Anterior_Imagen=contador_Cantidad_De_Imagenes;
        }





        //checar en que div estamos y en base a eso cargar la imagenes del div al que nos dirigimos
        if(contador_div_seleccionado==1){
                div_contenedor_img_3.setAttribute("src","../image/productos/"+Nombre_IMG_Global+"/"+Nombre_IMG_Global+contador_Carga_De_Anterior_Imagen+".jpg");
        }


        if(contador_div_seleccionado==2){
                div_contenedor_img_1.setAttribute("src","../image/productos/"+Nombre_IMG_Global+"/"+Nombre_IMG_Global+contador_Carga_De_Anterior_Imagen+".jpg");
        }


        if(contador_div_seleccionado==3){
                div_contenedor_img_2.setAttribute("src","../image/productos/"+Nombre_IMG_Global+"/"+Nombre_IMG_Global+contador_Carga_De_Anterior_Imagen+".jpg");
        }
        
        
        //estas funciones hacen que el carrucel al llegar a la primera imagen se pase a la ultima
        if(contador_div_seleccionado>1){
            contador_div_seleccionado--;
        }else{
            contador_div_seleccionado=3;
        }

        if(contador_Imagen_Seleccionada>contador_Cantidad_De_Imagenes_Minima){
            contador_Imagen_Seleccionada--;
        }else{
            contador_Imagen_Seleccionada=contador_Cantidad_De_Imagenes;
        }

        contadorclick++;
        

    }//termino de funcion Prev