'use client'

import styles from "./page.module.css";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Reviews } from "@/components/Reviews/Reviews";
import { AboutIconsList } from "@/components/AboutIconsList/AboutIconsList";
import { About } from "@/components/About/About";
import { Amenities } from "@/components/Amenities/Amenities";
import { Meals } from "@/components/Meals/Meals";
import { List } from "@/components/List/List";
import { Location } from "@/components/Location/Location";
import { Footer } from "@/components/Footer/Footer";
import { HouseDetails } from "@/components/HouseDetails/HouseDetails";
import { PhotoCard } from "@/components/PhotoCard/PhotoCard";
import { Form } from "@/components/Form/Form";
import { MobileForm } from "@/components/MobileForm/MobileForm";


export default function Home() {
  return (
    <div className={`${styles.page}`}>
      <Header />
      <Form />
      <Hero />
      <main className={styles.main}>
        <Reviews />
        <AboutIconsList />
        <About />
        <Amenities />
        <Meals /> 
        <List text="Real Moments">
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </List>
        <Location />
        <List text="Rooms and Beds">
          <HouseDetails />
          <HouseDetails />
          <HouseDetails />
        </List>
      </main>
      <Footer />
      <MobileForm />
    </div>
  );
}