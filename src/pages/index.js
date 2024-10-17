import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Typing from "@site/src/components/Typing";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import "./homePage.scss";
function HomepageHeader() {
  return (
    <header className="hero hero--primary hero-bg hero-banner">
      <div className="header-container container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className="hero__title">
              <Translate
                id="homepage.title"
                description="The homepage welcome message">
                Open Source, Cloud-Native AI Infrastructure Platform For
              </Translate>
              {/*Open Source, Cloud-Native AI Infrastructure Platform For */}
              <Typing/>
            </Heading>
            <div className="hero-subtitle home-subtitle">
              <p className="margin-bottom--md">
                <Translate id="home.subtitle">
                Fosters innovation in LLMs and generative AI applications. Built on open-source, cutting-edge technologies like Kubernetes and Ray.io, it is designed to be cloud-agnostic and ML framework agnostic.
                </Translate>
              </p>
              <div className="flex items-center">
                <Link
                  className="button button-bordered button-large button-white"
                  to="https://llmos.1block.ai/docs/quickstart"
                >
                  <Translate id="get-started">Get Started</Translate>
                </Link>
                <Link
                  className="button button-bordered button-large margin-left--md"
                  to="/contact-us"
                >
                  <Translate id="book-a-demo">Book a Demo</Translate>
                </Link>
              </div>
            </div>

          </div>

          <div className="col col--6">
            <img src={useBaseUrl('/img/gpu-stack1.webp')} alt="w-logo"/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - An Cloud-Native LLMOps Platform`}
      description="An Unified Open Source Cloud-Native LLMOps Platform"
    >
      <HomepageHeader/>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}