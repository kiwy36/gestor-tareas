const ClassTres = () => {
  const arrayUno = ['elementoUno', 'elementoDos']
  console.log (arrayUno[0])
  console.log(arrayUno.length)
  arrayUno[0]='elemento sobreescribido'
  console.log (arrayUno[0])
  arrayUno.push('elementoTres')
  console.log (arrayUno[2])
  let num  = 0;
  while (num <20){
    console.log(num)
    num = num +1

  }
  let i
  for (i =0 ; i<= 5; i++){
    console.log('coso')
  }


  return (
    <div>
      dia de clases
    </div>
  )
}

export default ClassTres
