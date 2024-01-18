type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <a
      href="#_"
      className="inline-block rounded-xl bg-gray-800 px-7 py-4 text-xl text-white hover:bg-gray-700"
    >
      {text}
    </a>
  )
}

export default Button
