import { Fragment } from "react"
import { Card, Col, InputGroup, Label, Row, Button, Input, CardGroup, InputGroupText } from "reactstrap"
import { Plus, Minus, Star, Circle } from "react-feather"
import Avatar from '@components/avatar'
import avatarImg from '../../../assets/images/portrait/small/user-07.jpg' //'@src/assets/images/portrait/small/user-07.jpg'

const pathImg =    'src/assets/images/Avatar/128.jpg' //'src\assets\images\Avatar'
// '@src/assets/images/Avatar/'
//src\APL\STAR\TimeSheet
//src\assets\images\Avatar
const Meta = props => {
    const val = Math.floor(Math.random() * (3 - 0)) + 0
    return (
        <Fragment>
            <Col className="sm-3">
                <h5 className="text-center titulo">Meta</h5>
                {val === 0 ? <Star size={32} color='gold'/> : val === 1 ? <Circle size={32} color='red'/> : <Circle size={32} color='black'/>}
                
            </Col>
        </Fragment>
    )
}

const Dias = props => {
    //console.log("PROPDIAS : ", props)
    const { label, indice, vendedor } = props
    const detalheDias = (l, i) => {
        console.log("DetalheDias : ", l, i)
        const valor = 'vendedor.d'.concat(i)
        console.log("Valor : ", valor, eval(valor))

        return (
        <InputGroup>
        <InputGroupText style={{height: "1em", justifyItems:"center"}} /* name={`btn${key[i]}`} */>
            {l}
        </InputGroupText>

        <Input  className='form-control mt-1' /* name={`inp${key[i]}`} */ defaultValue={eval(valor)} />
        <Col className="xs-1">
{/*         <Button color="primary" size="xs">+</Button>
        <Button color="primary" size="xs">-</Button> */}
        </Col>
        </InputGroup> 
    )
    }   
    return label.name ? detalheDias(label.name, indice) : null
}

export  const TimeSheetCard = (props) => {
 //   const listaLabelDias = [props.label]
    //console.log("PROPS : ", props)
 //return <h2>{props.vendedor.nome}</h2>
    return (
        <Fragment>
            <Col  className="card-vendedor-timesheet">
                <Card >
                <Row>
                        <Col className="mt-2 sm-9 titulo">
                            <h6>{props.vendedor.nome}</h6>
                        </Col>
                        <Col className="mt-2 sm-12">
                            <Avatar img={require('@src/assets/images/Avatar/user01.jpg').default} size='sm'/>
                        </Col>
                    </Row>

                    <hr/>
                                       
                    <Row className="sm-9">
                        {props.label.map((lbl, i) => (
                            //console.log("ITEM : ", i)
                             <Dias label={lbl} indice={i - 1} vendedor={props.vendedor} />
                        ))} 
                    </Row>
                    <hr/>

                    <Row className="sm-6">
                        <Meta />
                    </Row> 
                </Card>
            </Col>
        </Fragment>
    )
}