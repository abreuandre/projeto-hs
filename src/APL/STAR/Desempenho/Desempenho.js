import react, {useState} from 'react'
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row} from 'reactstrap'
import './Desempenho_2.css'
//import './Desempenho.css'
//import Button from 'react-bootstrap/Button'

function Desempenho() {

    const [qtdX, setQtdX] = useState(0)
    const [qtdCA, setQtdCA] = useState(0)
    const [qtdApr, setQtdApr] = useState(0)
    const [tpd, setTpd] = useState(0)
    const [tpr, setTpr] = useState(0)
    const [tpdg, setTpdg] = useState(0)
    const [limiteMax] = useState(99)
    const [limiteMin] = useState(0)
    const [loja, setLoja] = useState('')
    const handleChange = u => {
        const result = u.target.value.toUpperCase()

        setLoja(result)
    }
    /*const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })*/
  
    function mais(e) {
        e.preventDefault()
        console.log(e.target.name)
        console.log(e.target.value)
        console.log('mais')

          if (e.target.name === 'btnmaisX') {
            if (qtdX < limiteMax) { 
                setQtdX(parseInt(qtdX) + 1)
                
            }

        } else if (e.target.name === 'btnmaisCA') {
            if (qtdCA < limiteMax) {
                setQtdCA(parseInt(qtdCA) + 1)
            } 
            
             
        } else if (e.target.name === 'btnmaisQtdApr') {
            if (qtdApr < limiteMax) {
            setQtdApr(parseInt(qtdApr) + 1)
            }
            
        } else if (e.target.name === 'btnmaisTpd') {
            if (tpd < limiteMax) {
            setTpd(parseInt(tpd) + 1)
            }
            
        } else if (e.target.name === 'btnmaisTpr') {
            if (tpr < limiteMax)  {
            setTpr(parseInt(tpr) + 1)
            }
        } else  {
            if (tpdg < limiteMax) {
            setTpdg(parseInt(tpdg) + 1)
            } 
            
        } 
    }
                               
    function menos(e) {
        e.preventDefault()
        console.log(e.target.name)
        console.log('menos')

        if (e.target.name === 'btnmenosX') {
            if (qtdX - 1 < 0) {
                setQtdX(0)
            } else {
                setQtdX(qtdX - 1)
            }

        } else if (e.target.name === 'btnmenosCA') {
            if (qtdCA - 1 < 0) {
                setQtdCA(0)
            } else {
                setQtdCA(qtdCA - 1)
            }

        } else if (e.target.name === 'btnmenosQtdApr') {
            if (qtdApr - 1 < 0) {
                setQtdApr(0)
            } else {
                setQtdApr(qtdApr - 1)
            }

        } else if (e.target.name === 'btnmenosTpd') {
            if (tpd - 1 < 0) {
                setTpd(0)
            } else {
                setTpd(tpd - 1)
            }
        } else if (e.target.name === 'btnmenosTpr') {
            if (tpr - 1 < 0) {
                setTpr(0)
                  } else {
                setTpr(tpr - 1)
                }
        } else {
            if (tpdg - 1 < 0) {
                setTpdg(0)
            } else {
                setTpdg(tpdg - 1)
            }
        }
    }

    function validaLimite(ev) {
        
        console.log(ev.target.name)
        if (ev.target.name === "qtdX") {
            setQtdX(ev.target.value)    
        } else if (ev.target.name === "qtdCA") {
            setQtdCA(ev.target.value)
        } else if (ev.target.name === "qtdApr") {
            setQtdApr(ev.target.value) 
        } else if (ev.target.name === "tpd") {
            setTpd(ev.target.value) 
        } else if (ev.target.name === "tpr") {
            setTpr(ev.target.value)   
        } else if (ev.target.name === "tpdg") {
            setTpdg(ev.target.value)
        }
            
        
        /** Testando o limite inferior */
        if (parseInt(ev.target.value)  < limiteMin) {
            if (ev.target.name === "qtdX") {
                setQtdX(limiteMin)
            }
        }
        /***************************************** */ 
        /**Testando limite superioer */
        if (parseInt(ev.target.value)  > limiteMax) {
            if (ev.target.name === "qtdX") {
                setQtdX(limiteMax)
            } 
        }
        /******************************************** */
        if (parseInt(ev.target.value)  < limiteMin) {
            if (ev.target.name === "qtdCA") {
                setQtdCA(limiteMin)
            }
        }

        if (parseInt(ev.target.value)  > limiteMax) {
            if (ev.target.name === "qtdCA") {
                setQtdCA(limiteMax)
            } 
        }

        if (parseInt(ev.target.value)  < limiteMin) {
            if (ev.target.name === "qtdApr") {
                setQtdApr(limiteMin)
            }
        }

        if (parseInt(ev.target.value)  > limiteMax) {
            if (ev.target.name === "qtdApr") {
                setQtdApr(limiteMax)
            } 
        }

        if (parseInt(ev.target.value)  < limiteMin) {
            if (ev.target.name === "tpd") {
                setTpd(limiteMin)
            }
        }

        if (parseInt(ev.target.value)  > limiteMax) {
            if (ev.target.name === "tpd") {
                setTpd(limiteMax)
            } 
        }

        if (parseInt(ev.target.value)  < limiteMin) {
            if (ev.target.name === "tpr") {
                setTpr(limiteMin)
            }
        }

        if (parseInt(ev.target.value)  > limiteMax) {
            if (ev.target.name === "tpr") {
                setTpr(limiteMax)
            } 
        }

        if (parseInt(ev.target.value)  < limiteMin) {
            if (ev.target.name === "tpdg") {
                setTpdg(limiteMin)
            }
        }

        if (parseInt(ev.target.value)  > limiteMax) {
            if (ev.target.name === "tpdg") {
                setTpdg(limiteMax)
            } 
        }
    }

    /*if (!validate()) return
    
    function validate() {
        
        if (!qtdX.name) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher a quantidade X Atendidos'})

        return true
    }*/
    
        return (
            
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Cadastro de Desempenho</CardTitle>
          </CardHeader>
          
          <CardBody>
            <Form>
                <div class="conf1">
                    <div>
                        <label class="form-label">Loja:</label>
                        <input class="form-control input-loja" type="text" name="loja" value={loja} onChange={handleChange} required/> 
                    </div>

                    <div>
                        <label class="form-label">Vendedor:</label>
                        <input class="form-control input-vendedor" type="text" name="vend" maxlength="30" required/>
                    </div>

                    <div>
                        <label class="form-label">Data:</label>
                        <input class="form-control input-data" type="date" name="dt" required/>
                    </div>

                    <div>
                        <label class="form-label">Horas Trabalhadas:</label>
                        <input class="form-control input-horatrabalhada" type="time" name="ht" value="00:00" disable/>
                    </div>
                </div>
                    
                <div class="col conf2">
                    <div class="">
                        <div>
                            <label class="form-label">X Atendidos:</label>
                        </div>    
                        <div class="input-group input-group-prepend">
                            <button class="botaoMenos btn btn-primary input-group-text confbotao" name='btnmenosX' onClick={(e) => (menos(e))}>-</button>
                            <input class="form-control color confinput" id="numero" type="number" name="qtdX" placeholder="0" maxlength="2" value={qtdX} onChange={(ev) => (validaLimite(ev))} required/>
                            <button class="botaoMais btn btn-primary confbotao" name='btnmaisX' onClick={(e) => (mais(e))}>+</button>
                        </div>
                        
                    </div>
                                
                    <div>
                        <div>
                            <label class="form-label">CA Atendidos:</label>
                        </div>
                        <div class="input-group input-group-prepend">
                            <button class="botaoMenos btn btn-primary confbotao" name='btnmenosCA' onClick={(e) => (menos(e))}>-</button>
                            <input class="form-control color confinput" type="number" name="qtdCA" maxlength="2" value={qtdCA} onChange={(ev) => (validaLimite(ev))} required/>
                            <button class="botaoMais btn btn-primary confbotao" name='btnmaisCA' onClick={(e) => (mais(e))}>+</button>
                        </div>  
                    </div>
                                
                    <div>
                        <div>
                            <label class="form-label">Approaches Realizados:</label>
                        </div>
                        <div class="input-group input-group-prepend">
                            <button class="botaoMenos btn btn-primary confbotao" name='btnmenosQtdApr' onClick={(e) => (menos(e))}>-</button>
                            <input class="form-control color confinput" type="number" name="qtdApr" maxlength="2" value={qtdApr} onChange={(ev) => (validaLimite(ev))} required/>
                            <button class="botaoMais btn btn-primary confbotao" name='btnmaisQtdApr' onClick={(e) => (mais(e))}>+</button>
                        </div>  
                    </div>
                </div>
                
                <div class="col conf3">
                    <div>
                        <div>
                            <label class="form-label">Total de Passes Dados:</label>
                        </div>
                        <div class="input-group input-group-prepend">
                            <button class="botaoMenos btn btn-primary confbotao" name='btnmenosTpd' onClick={(e) => (menos(e))}>-</button>
                            <input class="form-control color confinput" type="number" name="tpd" maxlength="2" value={tpd} onChange={(ev) => (validaLimite(ev))} required/>
                            <button class="botaoMais btn btn-primary confbotao" name='btnmaisTpd' onClick={(e) => (mais(e))}>+</button>
                        </div>
                    </div>   
                                
                    <div>
                        <div>
                            <label class="form-label">Total de Passes Recebidos:</label>
                        </div>
                        <div class="input-group input-group-prepend">
                            <button class="botaoMenos btn btn-primary confbotao" name='btnmenosTpr' onClick={(e) => (menos(e))}>-</button>
                            <input class="form-control color confinput" type="number" name="tpr" maxlength="2" value={tpr} onChange={(ev) => (validaLimite(ev))} required/>
                            <button class="botaoMais btn btn-primary confbotao" name='btnmaisTpr' onClick={(e) => (mais(e))}>+</button>
                        </div>  
                    </div>
                                
                    <div>
                        <div>
                            <label class="form-label">Total de Passes Dados ao Gerente:</label>
                        </div>
                        <div class="input-group input-group-prepend">
                            <button class="botaoMenos btn btn-primary confbotao" name='btnmenosTpdg' onClick={(e) => (menos(e))}>-</button>
                            <input class="form-control color confinput" type="number" name="tpdg" maxlength="2" value={tpdg} onChange={(ev) => (validaLimite(ev))} required/>
                            <button class="botaoMais btn btn-primary confbotao" name='btnmaisTpdg' onClick={(e) => (mais(e))}>+</button>
                        </div> 
                    </div>
                </div>                    
                
                <div>
                    <input class="btn btn-primary" type="submit"/>
                </div>
                        
       
            </Form>
          </CardBody>
        </Card>
      )
}


export default Desempenho