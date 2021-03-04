
    
    // PEGANDO O CONTEXTO CANVAS E 2D 
    canvas = document.getElementById('m_canvas')
    ctx = canvas.getContext('2d')
    
    // LOOPING DE CONTAGEM DOS OBJETOS
    
    cont_vent = cont_pisca = cont_vio = cont_rad = cont_swift = cont_porta = cont_pc = cont_gatoJanela = cont_celular = cont_gatoCama = cont_janelaChuva = 
    cont_JanelaGato = cont_gatoPrateleira = cont_PTriste = cont_PRelaxante = cont_PNostalgia = cont_PAcolhedor = 0

    // ATRASO DO LOOPING (PRA IR MAIS DEVAGAR)

    atraso_vent = atraso_pisca = atraso_vio = atraso_rad = atraso_swift = atraso_porta = atraso_pc = atraso_gatoJanela = atraso_celular = atraso_gatoCama = 
    atraso_janelaChuva = atraso_JanelaGato = atraso_gatoPrateleira = atraso_PTriste = atraso_PRelaxante = atraso_PNostalgia = atraso_PAcolhedor = 0

    // PARAR E CONTINUAR LOOPING

    ventilador_ligar = pisca_ligar = violao_ligar = radio_ligar = swift_ligar = porta_ligar = pc_ligar = gatoJanela_ligar = celular_ligar = gatoCama_ligar = 
    janelaChuva_ligar = gatoPrateleira_ligar = PTriste_ligar = PRelaxante_ligar = PNostalgia_ligar = PAcolhedor_ligar = false

    // HOVER PARAR E CONTINUAR 

    ventilador_hover = pisca_hover = violao_hover = radio_hover = swift_hover = porta_hover = pc_hover = gatoJanela_hover = celular_hover = gatoCama_hover =
    janelaChuva_hover = gatoPrateleira_hover = PTriste_hover = PRelaxante_hover = PNostalgia_hover = PAcolhedor_hover = false
   

 // EVENTO ONCLICK 
  
 function mousecliquevent() {

 if (ventilador_ligar == false) { 
 ventilador_ligar = true
 somventilador = new Audio ('audio/ventilador1min.mp3')           
 somventilador.play()
 somventilador.loop = true
 } else {
 ventilador_ligar = false        
 somventilador.pause()
 }
 }      

 function mousecliquepisca() {  
 if (pisca_ligar == false) { 
 pisca_ligar = true
 sompisca = new Audio ('audio/Luz1minuto.mp3')           
 sompisca.play()
 sompisca.loop = true
 } else {
 pisca_ligar = false        
 sompisca.pause()
 }
 }

 function mousecliqueviolao() {
 if (violao_ligar == false) {
 violao_ligar = true
 somviolao = new Audio ('audio/violao.mp3')           
 somviolao.play()
 somviolao.loop = true
 } else {
  violao_ligar = false        
 somviolao.pause()
 }
 }

 function mousecliqueradio() {
 if (radio_ligar == false) {
 radio_ligar = true
 somradio = new Audio ('audio/Rádio1minuto.mp3')           
 somradio.play()
 somradio.loop = true
 } else {
 radio_ligar = false        
 somradio.pause()
 }
 }

 function mousecliqueswift() {
  if (swift_ligar == false) {
 swift_ligar = true
 somswift = new Audio ('audio/Brigando1min.mp3')           
 somswift.play()
 somswift.loop = true
 } else {
 swift_ligar = false        
 somswift.pause()
 }
 }

 function mousecliqueporta() {
 if (porta_ligar == false) {
 porta_ligar = true
 somporta = new Audio ('audio/porta.mp3')           
 somporta.play()
 somporta.loop = true
 } else {
 porta_ligar = false        
 somporta.pause()
 }
 }

 function mousecliquepc() {
 if (pc_ligar == false) {
 pc_ligar = true
 sompc = new Audio ('audio/Pc1minuto.mp3')           
 sompc.play()
 sompc.loop = true
 } else {
 pc_ligar = false        
 sompc.pause()
 }
 }

 function mousecliquegatoJanela() {
 if (gatoJanela_ligar == false) {
 gatoJanela_ligar = true
 somgatoJanela = new Audio ('audio/gatojanela.mp3')           
 somgatoJanela.play()
 somgatoJanela.loop = true
 } else {
 gatoJanela_ligar = false        
 somgatoJanela.pause()
 }
 }

 function mousecliquecelular() {
 if (celular_ligar == false) {
 celular_ligar = true
 somcelular = new Audio ('audio/cel.mp3')           
 somcelular.play()
 somcelular.loop = true
 } else {
 celular_ligar = false        
 somcelular.pause()
 }
 }

 function mousecliquegatoCama() {
 if (gatoCama_ligar == false) {
 gatoCama_ligar = true
 somgatoCama = new Audio ('audio/gatocama.mp3')           
 somgatoCama.play()
 somgatoCama.loop = true
 } else {
 gatoCama_ligar = false        
 somgatoCama.pause()
 }
 }

 function mousecliquejanelaChuva() {
 if (janelaChuva_ligar == false) {
 janelaChuva_ligar = true
 somjanelaChuva = new Audio ('audio/Chuva1minutoo.mp3')           
 somjanelaChuva.play()
 somjanelaChuva.loop = true
 } else {
 janelaChuva_ligar = false        
 somjanelaChuva.pause()
 }
 }

 function mousecliquegatoPrateleira() {
 if (gatoPrateleira_ligar == false) {
 gatoPrateleira_ligar = true
 somgatoPrateleira = new Audio ('audio/gatoprateleira.mp3')           
 somgatoPrateleira.play()
 somgatoPrateleira.loop = true
 } else {
 gatoPrateleira_ligar = false        
 somgatoPrateleira.pause()
 }
 }

 function mousecliquePTriste() {
 if (PTriste_ligar == false) {
 PTriste_ligar = true
 somPTriste = new Audio ('audio/Triste1minuto.mp3')           
 somPTriste.play()
 somPTriste.loop = true
 } else {
 PTriste_ligar = false        
 somPTriste.pause()
 }
 }

 function mousecliquePRelaxante() {
 if (PRelaxante_ligar == false) {
 PRelaxante_ligar = true
 somPRelaxante = new Audio ('audio/Calmo1minuto.mp3')           
 somPRelaxante.play()
 somPRelaxante.loop = true
 } else {
 PRelaxante_ligar = false        
 somPRelaxante.pause()
 }
 }

 function mousecliquePNostalgia() {
 if (PNostalgia_ligar == false) {
 PNostalgia_ligar = true
 somPNostalgia = new Audio ('audio/Nostalgico1min.mp3')           
 somPNostalgia.play()
 somPNostalgia.loop = true
 } else {
 PNostalgia_ligar = false        
 somPNostalgia.pause()
 }
 }

 function mousecliquePAcolhedor() {
 if (PAcolhedor_ligar == false) {
 PAcolhedor_ligar = true
 somPAcolhedor = new Audio ('audio/relaxante.mp3')           
 somPAcolhedor.play()
 somPAcolhedor.loop = true
 } else {
 PAcolhedor_ligar = false        
 somPAcolhedor.pause()
 }
 }


// EVENTO HOVER 

 function ventiladormouseOver() {

 if (ventilador_ligar == false, cont_vent == 0){
 ventilador_hover = true}
 }

 function ventiladormouseOut() {
 ventilador_hover = false
 }


 function piscamouseOver() {
 pisca_hover = true
 }

 function piscamouseOut() {
 pisca_hover = false
 }


 function violaomouseOver() {

 if (violao_ligar == false, cont_vio == 0){
 violao_hover = true}
 }

 function violaomouseOut() {
 violao_hover = false
 }

 
 function radiomouseOver() {

 if (radio_ligar == false, cont_rad == 0){
 radio_hover = true}
 }

 function radiomouseOut() {
 radio_hover = false
 }


 function swiftmouseOver() {

 if (swift_ligar == false, cont_swift == 0){
 swift_hover = true}
 }

 function swiftmouseOut() {
 swift_hover = false
 }


 function portamouseOver() {

 if (porta_ligar == false, cont_porta == 0){
 porta_hover = true}
 }

 function portamouseOut() {
 porta_hover = false
 }


 function pcmouseOver() {

 if (pc_ligar == false, cont_pc == 0){
 pc_hover = true}
 }

 function pcmouseOut() {
pc_hover = false
}


 function gatoJanelamouseOver() {

 if (gatoJanela_ligar == false, cont_gatoJanela == 0){
 gatoJanela_hover = true}
 }

 function gatoJanelamouseOut() {
 gatoJanela_hover = false
 }

 
 function celularmouseOver() {

 if (celular_ligar == false, cont_celular == 0){
 celular_hover = true}
 }

 function celularmouseOut() {
 celular_hover = false
 }


 function gatoCamamouseOver() {

 if (gatoCama_ligar == false, cont_gatoCama == 0){
 gatoCama_hover = true}
 }

 function gatoCamamouseOut() {
 gatoCama_hover = false
 }


 function janelaChuvamouseOver() {

 if (janelaChuva_ligar == false, cont_janelaChuva == 0){
 janelaChuva_hover = true}
 }

 function janelaChuvamouseOut() {
 janelaChuva_hover = false
 }  


 function PTristemouseOver() {

 if (PTriste_ligar == false, cont_PTriste == 0){
 PTriste_hover = true}
 }

 function PTristemouseOut() {
 PTriste_hover = false
 }


 function PRelaxantemouseOver() {

 if (PRelaxante_ligar == false, cont_PRelaxante == 0){
 PRelaxante_hover = true}
 }

 function PRelaxantemouseOut() {
 PRelaxante_hover = false
 }


 function gatoPrateleiramouseOver() {

 if (gatoPrateleira_ligar == false, cont_gatoPrateleira == 0){
 gatoPrateleira_hover = true}
 }

 function gatoPrateleiramouseOut() {
 gatoPrateleira_hover = false
 }


 function PNostalgiamouseOver() {

 if (PNostalgia_ligar == false, cont_PNostalgia == 0){
 PNostalgia_hover = true}
 }

 function PNostalgiamouseOut() {
 PNostalgia_hover = false
 }

 function PAcolhedormouseOver() {

 if (PAcolhedor_ligar == false, cont_PAcolhedor == 0){
 PAcolhedor_hover = true}
 }

 function PAcolhedormouseOut() {
 PAcolhedor_hover = false
 }


 // FUNÇÃO DESENHAR O HOVER 

 function ventiladorhover () {
 if (ventilador_hover) { 
 var ventiladorover = new Image()
 ventiladorover.src = "img/ventiladorHover.png"
 ctx.drawImage(ventiladorover, 400, 0, 269.75, 79) 
 }
 if (ventilador_ligar) {
 ventilador_hover = false
 }
  
 }


 function piscahover () {
 if (pisca_hover) { 
 var piscaover = new Image()
 piscaover.src = "img/piscapiscaHover.png"
 ctx.drawImage(piscaover, 730, 0, 305, 125) 
 }
 if (pisca_ligar) {
 pisca_hover = false
 }
 
 }


 function violaohover () {
 if (violao_hover) { 
 var violaoover = new Image()
 violaoover.src = "img/violaoHover.png"
 ctx.drawImage(violaoover, 1162, 528, 117, 192) 
 }
 if (violao_ligar) {
 violao_hover = false
 }
  
 }


 function radiohover () {
 if (radio_hover) { 
 var radioover = new Image()
 radioover.src = "img/radioHover.png"
 ctx.drawImage(radioover, 0.43, 448.91, 77.53, 71.39) 
 }
 if (radio_ligar) {
 radio_hover = false
 }
  
 }

 
 function swifthover () {
 if (swift_hover) { 
 var swiftover = new Image()
 swiftover.src = "img/swiftHover.png"
 ctx.drawImage(swiftover, 759, 625, 63, 52) 
 }
 if (swift_ligar) {
 swift_hover = false
 }
  
 }


 function portahover () {
 if (porta_hover) { 
 var portaover = new Image()
 portaover.src = "img/portaHover.png"
 ctx.drawImage(portaover, 82, 123, 153, 369) 
 }
 if (porta_ligar) {
 porta_hover = false
 }
  
 }


 function pchover () {
 if (pc_hover) { 
 var pcover = new Image()
 pcover.src = "img/pcHover.png"
 ctx.drawImage(pcover, 1084, 331, 119, 194) 
 }
 if (pc_ligar) {
 pc_hover = false
 }
  
 }


 function gatoJanelahover () {
 if (gatoJanela_hover) { 
 var gatoJanelaover = new Image()
 gatoJanelaover.src = "img/gatoJanelaHover.png"
 ctx.drawImage(gatoJanelaover, 1023.73, 283.92, 56.93, 98.2) 
 }
 if (gatoJanela_ligar) {
 gatoJanela_hover = false
 }
  
 }


 function celularhover () {
 if (celular_hover) { 
 var celularover = new Image()
 celularover.src = "img/celularHover.png"
 ctx.drawImage(celularover, 639, 424, 46, 34) 
 }
 if (celular_ligar) {
 celular_hover = false
 }
  
 }


 function gatoCamahover () {
 if (gatoCama_hover) { 
 var gatoCamaover = new Image()
 gatoCamaover.src = "img/gatoCamaHover.png"
 ctx.drawImage(gatoCamaover, 464, 397, 107, 71) 
 }
 if (gatoCama_ligar) {
 gatoCama_hover = false
 }
  
 }


 function janelaChuvahover () {
 if (janelaChuva_hover) { 
 var janelaChuvaover = new Image()
 janelaChuvaover.src = "img/janelaChuvaHover.png"
 ctx.drawImage(janelaChuvaover, 283.11, 82.86, 339.02, 249.47) 
 }
 if (janelaChuva_ligar) {
 janelaChuva_hover = false
 }
  
 }

 function gatoPrateleirahover () {
 if (gatoPrateleira_hover) { 
 var gatoPrateleiraover = new Image()
 gatoPrateleiraover.src = "img/gatoPrateleiraHover.png"
 ctx.drawImage(gatoPrateleiraover, 4, -3, 86, 79) 
 }
 if (gatoPrateleira_ligar) {
 gatoPrateleira_hover = false
 }
  
 }


 function PTristehover () {
 if (PTriste_hover) { 
 var PTristeover = new Image()
 PTristeover.src = "img/pTristeHover.png"
 ctx.drawImage(PTristeover, 821.93, 125.67, 124.71, 88.49) 
 }
 if (PTriste_ligar) {
 PTriste_hover = false
 }
  
 }


 function PRelaxantehover () {
 if (PRelaxante_hover) { 
 var PRelaxanteover = new Image()
 PRelaxanteover.src = "img/PRelaxanteHover.png"
 ctx.drawImage(PRelaxanteover, 871, 217, 99, 110) 
 }
 if (PRelaxante_ligar) {
 PRelaxante_hover = false
 }
  
 }


 function PNostalgiahover () {
 if (PNostalgia_hover) { 
 var PNostalgiaover = new Image()
 PNostalgiaover.src = "img/pNostalgiaHover.png"
 ctx.drawImage(PNostalgiaover, 630.32, 239.91, 113.14, 93.49) 
 }
 if (PNostalgia_ligar) {
 PNostalgia_hover = false
 }
  
 }

 
 function PAcolhedorhover () {
 if (PAcolhedor_hover) { 
 var PAcolhedorover = new Image()
 PAcolhedorover.src = "img/pAcolhedorHover.png"
 ctx.drawImage(PAcolhedorover, 352.3, 336.32, 104.8, 58) 
 }
 if (PAcolhedor_ligar) {
 PAcolhedor_hover = false
 }
  
 }


     // DESENHANDO TUDO 
     requestAnimationFrame(desenhar)

      function desenhar(){
      ctx.clearRect(0, 0, 1280, 720)
      fundo()
      ventilador()
      pisca()
      violao()
      radio()
      swift()
      porta()
      celular()
      gatoCama()
      janelaChuva()
      gatoPrateleira()
      JanelaGato()
      gatoJanela()
      pc()
      PTriste()
      PRelaxante()
      PNostalgia()
      PAcolhedor()
      // HOVER 

      ventiladorhover(ventilador_hover)
      piscahover(pisca_hover)
      violaohover(violao_hover)
      radiohover(radio_hover)
      swifthover(swift_hover)
      portahover(porta_hover)
      pchover(pc_hover)
      gatoJanelahover(gatoJanela_hover)
      celularhover(celular_hover)
      gatoCamahover(gatoCama_hover)
      janelaChuvahover(janelaChuva_hover)
      gatoPrateleirahover(gatoPrateleira_hover)
      PTristehover(PTriste_hover)
      PRelaxantehover(PRelaxante_hover)
      PNostalgiahover(PNostalgia_hover)
      PAcolhedorhover(PAcolhedor_hover)
      requestAnimationFrame(desenhar)
       }


     // FUNÇÕES DOS ELEMENTOS 

         function fundo(){
         var background = new Image()
         background.src = "img/Fundo.png" 
         ctx.drawImage(background, 0, 0)
         }
       

         function ventilador(){
         var ventilador1 = new Image()
         ventilador1.src = "img/Ventilador.png"
         largura = 269.75
         altura = 79
         ctx.drawImage(ventilador1, 0+(largura*cont_vent), 0, largura, altura, 400, 0, largura, altura) 
         atraso_vent++
         if(atraso_vent>8&&ventilador_ligar){
         cont_vent++
         atraso_vent = 0
         }
         if(cont_vent>3)
         cont_vent = 0    
         }


         function pisca(){
         var pisca1 = new Image()
         pisca1.src = "img/PiscaPisca.png"
         largura = 305
         altura = 125         
         ctx.drawImage(pisca1, 0+(largura*cont_pisca), 0, largura, altura, 730, 0, largura, altura)
         atraso_pisca++
         if(atraso_pisca>15&&pisca_ligar){
         cont_pisca++
         atraso_pisca = 0
         } else if(pisca_ligar==false){
         cont_pisca = 0
         }
         if(cont_pisca>3)
          cont_pisca = 1
         }

  
         function violao(){
         var violao1 = new Image()
         violao1.src = "img/violao.png"
         largura = 117
         altura = 192         
         ctx.drawImage(violao1, 0+(largura*cont_vio), 0, largura, altura, 1162, 528, largura, altura)
         atraso_vio++
         if(atraso_vio>20&&violao_ligar){
         cont_vio++
         atraso_vio = 0
         } else if(violao_ligar==false){
         cont_vio = 0
         }
         if(cont_vio>2)
         cont_vio = 0
         }

    
         function radio(){
         var radio1 = new Image()
         radio1.src = "img/radio.png"
         largura = 77.53
         altura = 71.39      
         ctx.drawImage(radio1, 0+(largura*cont_rad), 0, largura, altura, 0.43, 448.91, largura, altura)
         atraso_rad++
         if(atraso_rad>20&&radio_ligar){
         cont_rad++
         atraso_rad = 0
         } else if(radio_ligar==false){
         cont_rad = 0
         }
         if(cont_rad>2)
         cont_rad = 0
         }


         function swift(){
         var swift1 = new Image()
         swift1.src = "img/swift.png"
         largura = 63
         altura = 52     
         ctx.drawImage(swift1, 0+(largura*cont_swift), 0, largura, altura, 759, 625, largura, altura)
         atraso_swift++
         if(atraso_swift>20&&swift_ligar){
         cont_swift++
         atraso_swift = 0
         } else if(swift_ligar==false){
         cont_swift = 0
         }
         if(cont_swift>1)
         cont_swift = 0
         }

         function porta(){
         var porta1 = new Image()
         porta1.src = "img/porta.png"
         largura = 153
         altura = 369      
         ctx.drawImage(porta1, 0+(largura*cont_porta), 0, largura, altura, 82, 123, largura, altura)
         atraso_porta++
         if(atraso_porta>20&&porta_ligar){
         cont_porta++
         atraso_porta = 0
         } else if(porta_ligar==false){
         cont_porta = 0
         }
         if(cont_porta>1)
         cont_porta = 0
         }


         function pc(){
         var pc1 = new Image()
         pc1.src = "img/pc.png"
         largura = 119
         altura = 194    
         ctx.drawImage(pc1, 0+(largura*cont_pc), 0, largura, altura, 1084, 331, largura, altura)
         atraso_pc++
         if(atraso_pc>20&&pc_ligar){
         cont_pc++
         atraso_pc = 0
         } else if(pc_ligar==false){
         cont_pc = 0
         }
         if(cont_pc>1)
         cont_pc = 0
         }


         function gatoJanela(){
         var gatoJanela1 = new Image()
         gatoJanela1.src = "img/gatoJanela.png"
         largura = 56.93
         altura = 98.2    
         ctx.drawImage(gatoJanela1, 0+(largura*cont_gatoJanela), 0, largura, altura, 1023.73, 283.92, largura, altura)
         atraso_gatoJanela++
         if(atraso_gatoJanela>20&&gatoJanela_ligar){
         cont_gatoJanela++
         atraso_gatoJanela = 0
         } else if(gatoJanela_ligar==false){
         cont_gatoJanela = 0
         }
         if(cont_gatoJanela>2)
         cont_gatoJanela = 0
         }


         function celular(){
         var celular1 = new Image()
         celular1.src = "img/celular.png"
         largura = 46
         altura = 34    
         ctx.drawImage(celular1, 0+(largura*cont_celular), 0, largura, altura, 639, 424, largura, altura)
         atraso_celular++
         if(atraso_celular>20&&celular_ligar){
         cont_celular++
         atraso_celular = 0
         } else if(celular_ligar==false){
         cont_celular = 0
         }
         if(cont_celular>1)
         cont_celular = 0
         }


         function gatoCama(){
         var gatoCama1 = new Image()
         gatoCama1.src = "img/gatoCama.png"
         largura = 107
         altura = 71    
         ctx.drawImage(gatoCama1, 0+(largura*cont_gatoCama), 0, largura, altura, 464, 397, largura, altura)
         atraso_gatoCama++
         if(atraso_gatoCama>20&&gatoCama_ligar){
         cont_gatoCama++
         atraso_gatoCama = 0
         } else if(gatoCama_ligar==false){
         cont_gatoCama = 0
         }
         if(cont_gatoCama>2)
         cont_gatoCama = 0
         }


         function janelaChuva(){
         var janelaChuva1 = new Image()
         janelaChuva1.src = "img/janelaChuva.png"
         largura = 339.02
         altura = 249.47    
         ctx.drawImage(janelaChuva1, 0+(largura*cont_janelaChuva), 0, largura, altura, 283.11, 82.86, largura, altura)
         atraso_janelaChuva++
         if(atraso_janelaChuva>20&&janelaChuva_ligar){
         cont_janelaChuva++
         atraso_janelaChuva = 0
         } else if(janelaChuva_ligar==false){
         cont_janelaChuva = 0
         }
         if(cont_janelaChuva>3)
         cont_janelaChuva = 1
         }


         function JanelaGato(){
         var JanelaGato1 = new Image()
         JanelaGato1.src = "img/JanelaGato.png"
         largura = 243.75
         altura = 347    
         ctx.drawImage(JanelaGato1, 0+(largura*cont_JanelaGato), 0, largura, altura, 967, 82, largura, altura)
         atraso_JanelaGato++
         if(atraso_JanelaGato>20&&janelaChuva_ligar){
         cont_JanelaGato++
         atraso_JanelaGato = 0
         } else if(janelaChuva_ligar==false){
         cont_JanelaGato = 0
         }
         if(cont_JanelaGato>2)
         cont_JanelaGato = 1
         }


         function gatoPrateleira(){
         var gatoPrateleira1 = new Image()
         gatoPrateleira1.src = "img/gatoPrateleira.png"
         largura = 86
         altura = 79    
         ctx.drawImage(gatoPrateleira1, 0+(largura*cont_gatoPrateleira), 0, largura, altura, 4, -3, largura, altura)
         atraso_gatoPrateleira++
         if(atraso_gatoPrateleira>20&&gatoPrateleira_ligar){
         cont_gatoPrateleira++
         atraso_gatoPrateleira = 0
         } else if(gatoPrateleira_ligar==false){
         cont_gatoPrateleira = 0
         }
         if(cont_gatoPrateleira>2)
         cont_gatoPrateleira = 0
         }


         function PTriste(){
         var PTriste1 = new Image()
         PTriste1.src = "img/pTriste.png"
         largura = 124.71
         altura = 88.49  
         ctx.drawImage(PTriste1, 0+(largura*cont_PTriste), 0, largura, altura, 821.93, 125.67, largura, altura)
         atraso_PTriste++
         if(atraso_PTriste>20&&PTriste_ligar){
         cont_PTriste++
         atraso_PTriste = 0
         } else if(PTriste_ligar==false){
         cont_PTriste = 0
         }
         if(cont_PTriste>1)
         cont_PTriste = 0
         }


         function PRelaxante(){
         var PRelaxante1 = new Image()
         PRelaxante1.src = "img/pRelaxante.png"
         largura = 99
         altura = 110 
         ctx.drawImage(PRelaxante1, 0+(largura*cont_PRelaxante), 0, largura, altura, 871, 217, largura, altura)
         atraso_PRelaxante++
         if(atraso_PRelaxante>20&&PRelaxante_ligar){
         cont_PRelaxante++
         atraso_PRelaxante = 0
         } else if(PRelaxante_ligar==false){
         cont_PRelaxante = 0
         }
         if(cont_PRelaxante>1)
         cont_PRelaxante = 0
         }


         function PNostalgia(){
         var PNostalgia1 = new Image()
         PNostalgia1.src = "img/pNostalgia.png"
         largura = 113.14
         altura = 93.49  
         ctx.drawImage(PNostalgia1, 0+(largura*cont_PNostalgia), 0, largura, altura, 630.32, 239.91, largura, altura)
         atraso_PNostalgia++
         if(atraso_PNostalgia>20&&PNostalgia_ligar){
         cont_PNostalgia++
         atraso_PNostalgia = 0
         } else if(PNostalgia_ligar==false){
         cont_PNostalgia = 0
         }
         if(cont_PNostalgia>1)
         cont_PNostalgia = 0
         }


         function PAcolhedor(){
         var PAcolhedor1 = new Image()
         PAcolhedor1.src = "img/pAcolhedor.png"
         largura = 104.8
         altura = 58
         ctx.drawImage(PAcolhedor1, 0+(largura*cont_PAcolhedor), 0, largura, altura, 352.3, 336.32, largura, altura)
         atraso_PAcolhedor++
         if(atraso_PAcolhedor>20&&PAcolhedor_ligar){
         cont_PAcolhedor++
         atraso_PAcolhedor = 0
         } else if(PAcolhedor_ligar==false){
         cont_PAcolhedor = 0
         }
         if(cont_PAcolhedor>1)
         cont_PAcolhedor = 0
         }
