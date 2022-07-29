import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex justify-center bg-gray-700 border-b border-gray-600">
      <div className="sm:m-auto ml-4 mr-auto">
      <Logo />
      </div>
    </header>
  )
}