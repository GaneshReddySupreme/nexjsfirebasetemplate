import React from "react";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <h1>Our Services</h1>
      <p>
        We offer a wide range of services to meet your needs. Whether you're looking
        for web development, mobile apps, or digital strategy, we've got you covered.
      </p>

      {/* Add your service details below */}
      <section>
        <h2>Web Development</h2>
        <p>Modern websites built with the latest technologies.</p>
      </section>

      <section>
        <h2>Mobile Apps</h2>
        <p>Cross-platform mobile apps tailored to your business.</p>
      </section>

      <section>
        <h2>Consulting</h2>
        <p>Expert advice to help grow your digital presence.</p>
      </section>
    </main>
  );
}
