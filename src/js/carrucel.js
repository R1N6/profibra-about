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

    
    function ocultar_o_mostrar_Carrucel(Nombre_IMG,Cantidad_De_Imagenes){

        Nombre_IMG_Global = Nombre_IMG;
        contador_Cantidad_De_Imagenes = Cantidad_De_Imagenes; 

        var elemento_Div_Fondo_Contenedor = document.getElementById("Fondo_contenedor");
        var div_img_seleccionado = document.getElementById("img_contenedor"+contador_div_seleccionado);    
        var ocultar_MarginMainContent = document.getElementById("main-content");

        contador_Imagen_Seleccionada=1;

        if (elemento_Div_Fondo_Contenedor.style.display === "none") {
            elemento_Div_Fondo_Contenedor.style.display = "flex";
            div_img_seleccionado.setAttribute("src","../image/productos/"+Nombre_IMG+"/"+Nombre_IMG+"1.JPG");        
            ocultar_MarginMainContent.style.marginTop = "0";    
        } else {
            elemento_Div_Fondo_Contenedor.style.display = "none";
            ocultar_MarginMainContent.style.marginTop = "7.4vh";   
        }
    }
 
  

    function Next(){
        //variable que vincula el evento de deslizar del boton next
        var boton_siguiente = document.getElementById("id_next");

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
        
        


        
        //checar en que div estamos y en base a eso cargar la imagenes del div al que nos dirigimos
        if(contador_div_seleccionado==1){
            if(contador_Imagen_Seleccionada<=contador_Cantidad_De_Imagenes){
                div_contenedor_img_2.setAttribute("src","../image/productos/"+Nombre_IMG_Global+contador_Carga_De_Siguiente_Imagen+".JPG");
                boton_siguiente.setAttribute("href","#myCarousel");

            }
        }


        if(contador_div_seleccionado==2){
            if(contador_Imagen_Seleccionada<=contador_Cantidad_De_Imagenes){
                div_contenedor_img_3.setAttribute("src","../image/productos/"+Nombre_IMG_Global+contador_Carga_De_Siguiente_Imagen+".JPG");
                boton_siguiente.setAttribute("href","#myCarousel");
                
            }
        }


        if(contador_div_seleccionado==3){
            if(contador_Imagen_Seleccionada<=contador_Cantidad_De_Imagenes){
                div_contenedor_img_1.setAttribute("src","../image/productos/"+Nombre_IMG_Global+contador_Carga_De_Siguiente_Imagen+".JPG");
                boton_siguiente.setAttribute("href","#myCarousel");
           
            }
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


    function Prev(){
        //variable que vincula el evento deslizar del boton prev
        var boton_Anterior = document.getElementById("id_prev"); 

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
            if(contador_Imagen_Seleccionada>=contador_Cantidad_De_Imagenes_Minima){
                div_contenedor_img_3.setAttribute("src","../image/productos/"+Nombre_IMG_Global+contador_Carga_De_Anterior_Imagen+".JPG");
                boton_Anterior.setAttribute("href","#myCarousel");
        
            }
        }


        if(contador_div_seleccionado==2){
            if(contador_Imagen_Seleccionada>=contador_Cantidad_De_Imagenes_Minima){
                div_contenedor_img_1.setAttribute("src","../image/productos/"+Nombre_IMG_Global+contador_Carga_De_Anterior_Imagen+".JPG");
                boton_Anterior.setAttribute("href","#myCarousel");
        
            }
        }


        if(contador_div_seleccionado==3){
            if(contador_Imagen_Seleccionada>=contador_Cantidad_De_Imagenes_Minima){
                div_contenedor_img_2.setAttribute("src","../image/productos/"+Nombre_IMG_Global+contador_Carga_De_Anterior_Imagen+".JPG");
                boton_Anterior.setAttribute("href","#myCarousel");
   
            }
        }

        //estas funciones hacen que el carrucel al llegar a la primera imagen se pase a la ultima
        if(contador_div_seleccionado>contador_Cantidad_De_Imagenes_Minima){
            contador_div_seleccionado--;
        }else{
            contador_div_seleccionado=3;
        }

        if(contador_Imagen_Seleccionada>contador_Cantidad_De_Imagenes_Minima){
            contador_Imagen_Seleccionada--;
        }else{
            contador_Imagen_Seleccionada=contador_Cantidad_De_Imagenes;
        }

    }//termino de funcion Prev