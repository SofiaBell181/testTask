import { AskedCustomers } from "../components/AskedCustomers/AskedCustomers";
import { Card } from "../components/Card/Card"
import { Footer } from "../components/Footer/Footer";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header"
import { Question } from "../components/Question/Question";
import { Reviews } from "../components/Review/Reviews"
import { ThirdBlock } from "../components/ThirdBlock/ThirdBlock"
import { reviews } from "../data";

export const Home = () => {
  return (
    <>
      <Header />
      <Card />
      <ThirdBlock />
      <Reviews reviews={reviews} />
      <Question />
      <AskedCustomers />
      <Form />
      <Footer />
    </>
  )
}


