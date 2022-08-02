import React from "react";
import styled from 'styled-components';

import Form from "../components/Form/Form";


const FormExpected = () => { return (<h1>Введите данные, чтобы внести вас базу</h1>) }
const FormRecovered = () => { return (<h1>Ваши данные отправились на сервер</h1>) }

const Greeting = (props) => {
    const isFormExpected = props.isLoggedIn;
    if (isFormExpected) {
        return <FormRecovered />;
    }
    return <FormExpected />;
}

const Sections = () => {
 return (
  <Section>
      <Container> 
            <Greeting isFormExpected={false} />
            <Form/>
      </Container>

  </Section>
 )
}

export default Sections; 

const Section = styled.section ({

})

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})
