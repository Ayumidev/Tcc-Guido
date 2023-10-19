import './css/Objetivo.css'

import PB from '../imagens/olhoalvo.png'
import OB from '../imagens/objetivo.png'

function Objetivo() {
    return (
    <>

    <header>
        <div className="obj">
            <div className='img'>
                <img src={OB} />
                <br />
                <h1>Objetivo</h1>
                <br />
            </div>
            
            <p>
                O nosso pensamento na criação do guido foi facilitar e deixar mas seguro o transporte desses documentos, que
                podem ser perdidos e até danificados,oque pode ser prejudicial.
            </p>
         </div>

         <div className="conteudop">
         <h1>Público Alvo</h1>
         <div className='img'>
                <img src={PB} />
            </div>
                <p>
                 O tipo de cliente que buscamos são escritórios que buscam econimizar tempo transportando documentos.
                 Mas é nosso produto pode se adaptar aos interessados de outras áreas.
                </p>
   
   </div>
    </header>
 
        


</>
    )
}

export default Objetivo