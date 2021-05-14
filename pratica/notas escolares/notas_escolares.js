/*
   NOTAS ESCOLARES

   * DE 90 PRA CIMA - A
   * ENTRE 80 - 89  - B
   * ENTRE 70 - 79  - C
   * ENTRE 60 - 69  - D
   * ENTRE 50 - 59  - E
   * MENOR QUE: 50  - F
 */
   function verificar() {

      const nota = document
                       .getElementById('numNota')
                       .value
      let rank = ''
    
      if (nota >= 90 && nota <= 100) {
        rank = 'A'
      } else if (nota >= 80 && nota <= 89) {
        rank = 'B'
      } else if (nota >= 70 && nota <= 79) {
        rank = 'C'
      } else if (nota >= 60 && nota <= 69) {
        rank = 'D'
      } else if (nota >= 50 && nota <= 59) {
        rank = 'E'
      } else if (nota > -1 && nota < 50) {
        rank = 'F'
      }
      else {
         alert('[ERRO] Digite um valor válido.')
      }
      
      document
          .getElementById('result')
          .innerText = `Nota: ${rank}`
    }
  
