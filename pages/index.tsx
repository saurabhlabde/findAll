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

// style
import { MainSection, Section, BlankSpace } from "../styles/index";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [showAddFood, setShowAddFood] = useState(false);
  const [showAddJob, setShowAddJob] = useState(false);
  const [showAddRecipo, setShowAddRecipo] = useState(false);

  const registerClickHandel = () => {
    setShowRegister(true);
  };

  const loginClickHandel = () => {
    setShowLogin(true);
  };

  const foodAddHandel = () => {
    setShowAddFood(!showAddFood);
  };

  const jobAddHandel = () => {
    setShowAddJob(!showAddJob);
  };

  const recipoAddHandel = () => {
    setShowAddRecipo(!showAddRecipo);
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
          <FoodIndex addClick={foodAddHandel} />
          <RecipesIndex addClick={recipoAddHandel} />
          <JobIndex addClick={jobAddHandel} />

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
        </Section>
      </MainSection>
    </>
  );
}
