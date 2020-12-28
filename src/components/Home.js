import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

function Home() {
  return (
    <section>
      <main className="body">
        <div className="home">
          <Link to="/products">
            <h3 className="cta">Enter</h3>
          </Link>
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </section>
  );
}

export default Home;
