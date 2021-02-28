import React from "react";
import Header from '../../components/header/index';
import SellCar from "../../components/sellcar/index";
import HowItWorks from '../../components/HowItWorks';
import Form from '../../components/Form/index';
import Services from '../../components//Services/index';
import  Preparedbeforeourcall from '../../components//preparedbeforeourcall/index';
import RequiredDocumentation from '../../components/Required Documentation/index';
import Footer from '../../components/Footer//index';
function Home() {
  return (

      <div className="App">
      <Header />
        <SellCar />
        <HowItWorks/>
        <Form/>
        <Services/>
        < Preparedbeforeourcall/>
        <RequiredDocumentation/>
        <Footer/>
       
      </div>
  
  )
}

export default Home








