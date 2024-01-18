type LinkButtonProps = {
  linkUrl: string
}
const LinkButton = ({ linkUrl }: LinkButtonProps) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-7 py-2.5 text-white focus:ring-4 focus:ring-blue-300"
    >
      <span className="z-40">{linkUrl}</span>
      <svg
        className="z-40 -mr-1 ml-2 h-3 w-3 transition-all duration-300 group-hover:translate-x-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div className="absolute inset-0 z-20 h-[200%] w-[200%] translate-x-[-70%] rotate-45 bg-white/30 transition-all duration-1000 group-hover:translate-x-[50%] group-hover:scale-100"></div>
    </a>
  )
}

export default LinkButton
