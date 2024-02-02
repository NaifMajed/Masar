import Container from "./container";

const Hero = () => {
  return (
      <Container className="flex w-full  border-b border-black dark:border-white">
        <div className="flex items-center w-full justify-center mb-10">
          <div className="max-w-2xl mb-8">
          
            <div className="flex flex-col space-y-3 sm:space-x-4 sm:space-y-0 items-center justify-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-4 py-2 text-lg font-medium text-center text-white bg-indigo-600 rounded-xl ">
                ابدأ الآن
              </a>
            </div>
          </div>
        </div>

      </Container>
  );
}

export default Hero;