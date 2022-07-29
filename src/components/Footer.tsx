import { FooterLogo } from './FooterLogo'
export function Footer() {
  return (
    <div className="w-full h-auto flex md:flex-row flex-col justify-between p-4 border-t border-gray-600">
      <div className='flex justify-items-center md:flex-row flex-col'>
        <div className='m-auto'>
          <FooterLogo />
        </div>
        <p className='m-auto sm:pl-5 p-0'>Rocketseat - Todos os direitos reservados</p>
      </div>
      <span className='my-auto sm:mx-0 m-auto'>Políticas de privacidade</span>
    </div>
  )
}