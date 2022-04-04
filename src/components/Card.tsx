interface Props {
  image: string
  title?: string
  description?: string
  repo?: string
  live?: string
}

const Card = ({ image, title, description, repo, live }: Props) => {
  const bgUrl = image

  return (
    <div className="card max-w-[35ch] w-[35ch] h-full rounded-xl group overflow-hidden">
      <div
        className={`text-main_font_color ${bgUrl} bg bg-cover h-full pt-32 max-w-[35ch] focus-within:scale-105 hover:scale-105 rounded-xl transition transform`}
      >
        <div className="card-content h-full translate-y-20 group-hover:translate-y-0 group-focus-within:translate-y-0 transform translate duration-500 ease">
          <h2 className="card-title font-medium">{title}</h2>
          <p className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transform ease-in duration-300 font-light text-sm">
            {description}
          </p>
          <div className="mt-6 space-x-4 text-xs">
            {repo && (
              <a
                className="cursor-pointer py-2 px-5 bg-second_accent rounded-full font-medium"
                href={repo}
              >
                Repo.
              </a>
            )}
            {live && (
              <a
                className="cursor-pointer py-2 px-5 bg-second_accent rounded-full font-medium"
                href={live}
              >
                Live.
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
