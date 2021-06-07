import Head from "next/head";

// components
import { FoodIndex } from "../modules/food/index";
import { JobIndex } from "../modules/job/index";
import { PayIndex } from "../modules/pay/index";
import { RecipesIndex } from "../modules/recipes/index";
import { Nav } from "../components/Nav";
import { LoginIndex } from "../modules/login/index";
import { RegisterIndex } from "../modules/register/index";
import { AddFood } from "../modules/food/add";
import { AddJob } from "../modules/job/add";
import { AddRecipes } from "../modules/recipes/add";
import { OrderCard } from "../modules/food/order";
import { ApplyCard } from "../modules/job/apply";

// style
import { MainSection, Section, BlankSpace } from "../styles/index";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [showAddFood, setShowAddFood] = useState(false);
  const [showAddJob, setShowAddJob] = useState(false);
  const [showAddRecipo, setShowAddRecipo] = useState(false);

  const [showApply, setShowApply] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  // auth click

  const registerClickHandel = () => {
    setShowRegister(true);
  };

  const loginClickHandel = () => {
    setShowLogin(true);
  };

  // add click

  const foodAddHandel = () => {
    setShowAddFood(!showAddFood);
  };

  const jobAddHandel = () => {
    setShowAddJob(!showAddJob);
  };

  const recipoAddHandel = () => {
    setShowAddRecipo(!showAddRecipo);
  };

  // button click

  const showApplyHandel = () => {
    setShowApply(!showApply);
  };

  const showRecipoHandel = () => {};

  const showOrderHandel = () => {
    setShowOrder(!showOrder);
  };

  return (
    <>
      <Head>
        <title>Home | FindAll</title>
        <meta name="description" content="findall find all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection>
        <Section>
          <Nav
            onLoginClick={loginClickHandel}
            onRegisterClick={registerClickHandel}
          />

          <PayIndex />
          <FoodIndex addClick={foodAddHandel} onButtonClick={showOrderHandel} />
          <RecipesIndex
            addClick={recipoAddHandel}
            onButtonClick={showRecipoHandel}
          />
          <JobIndex addClick={jobAddHandel} onButtonClick={showApplyHandel} />

          <BlankSpace />

          {showRegister && (
            <RegisterIndex
              setLogin={setShowLogin}
              setRegister={setShowRegister}
            />
          )}

          {showLogin && (
            <LoginIndex setLogin={setShowLogin} setRegister={setShowRegister} />
          )}

          {showAddFood && <AddFood onClose={foodAddHandel} />}
          {showAddJob && <AddJob onClose={jobAddHandel} />}
          {showAddRecipo && <AddRecipes onClose={recipoAddHandel} />}

          {showOrder && <OrderCard onClose={showOrderHandel} />}
          {showApply && <ApplyCard onClose={showApplyHandel} />}
        </Section>
      </MainSection>
    </>
  );
}
