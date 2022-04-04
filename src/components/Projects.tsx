import Card from './Card'

const Projects = () => {
  return (
    <div className="bg-[url(./img/projectsbg.svg)] bg-no-repeat bg-right-top">
      <section className="mt-32 md:mt-20 lg:mt-56 container mx-auto px-6 text-main_font_color ">
        <h1 id="projects" className="section-title inline-block mb-32">
          Projects.
        </h1>
        <div className="mb-6">
          <span className="text-center block mb-12 font-semibold text-lg lg:font-bold lg:text-xl">
            These are some of the projects I am working on.
          </span>
        </div>
        <div className="lg:flex mt-7 justify-center lg:justify-between items-center content-center">
          <div className="basis-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3  items-center justify-center content-center justify-items-center">
            <Card
              repo={'https://github.com/KimchiSayCheese/medium-mock'}
              live={'https://medium-mock-c6446top6-kimchisaycheese.vercel.app/'}
              title={'Medium Mock'}
              image={`bg-[url(./img/project1.png)]`}
              description={'Sanity CMS, NextJS, React used to create Medium.'}
            />
            <Card
              repo={'https://github.com/KimchiSayCheese/ufctop15-api'}
              title={'UFC top 15 api'}
              image={`bg-[url(./img/project2.jpeg)]`}
              description={'Puppeteer to scrap fighter info.'}
            />
            <Card
              repo={'https://github.com/KimchiSayCheese/medium-mock'}
              live={'https://medium-mock-c6446top6-kimchisaycheese.vercel.app/'}
              title={'Medium Mock'}
              image={`bg-[url(./img/project1.png)]`}
              description={'Sanity CMS, NextJS, React used to create Medium.'}
            />
          </div>
          <div className="border-2 border-red bg-[url(./img/projectsbg.png)]"></div>
        </div>
      </section>
    </div>
  )
}

export default Projects
