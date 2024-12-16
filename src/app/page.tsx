'use client'

import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import { AboutIconsList } from "@/components/AboutIconsList";
import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Meals } from "@/components/Meals";
import { List } from "@/components/List";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { HouseDetails } from "@/components/HouseDetails";
import { PhotoCard } from "@/components/PhotoCard";
import { Form } from "@/components/Form";
import { MobileForm } from "@/components/MobileForm";


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