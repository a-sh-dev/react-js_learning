// ! RUN npm install react-router@next react-router-dom@next --> to install the latest version

import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      {/* Outlet is responsible to be displaying whatever is in this nested component */}
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h2>Our Services</h2>
    </div>
  )
}

export function Location() {
  return (
    <div>
      <h2>Our Location</h2>
    </div>
  )
}

export function Oops404() {
  // * useLocation returns the current location

  let location = useLocation();
  return (
    <div>
      <h1>Resources in "{location.pathname}" not found – 404</h1>
    </div>
  )
}