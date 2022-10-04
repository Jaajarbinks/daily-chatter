import { MetaTags } from '@redwoodjs/web'

import Response from 'src/components/Response/Response'

const response = {
  title: 'Low Rise? High Rise? Rise Above',
  body: 'Let people wear whatever the heck they want who cares',
  user: 'Huck',
}
const response2 = {
  title: 'Bodies are different shapes',
  body: 'Wear what youre comfortable with',
  user: 'Leah',
}
const response3 = {
  title: 'Both arguments have holes',
  body: 'I literally do not care how high or low your jeans are but for the love of all that is hole-y can we quit with the pre-distressed jeans?',
  user: 'Lana',
}
const response4 = {
  title: 'We love a Jort king',
  body: 'From cutoff capris to daisy dukes, the true form for demin is jorts. Function, fashion, and free-knees!',
  user: 'Huck',
}

const response5 = {
  title: 'Friends in low places',
  body: 'I for one welcome the return of low rise and the first hip bones of the season',
  user: 'Atkins',
}

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main className="items-center flex flex-col justify-center">
        <h1 className="text-center text-2xl font-bold mb-3">Jeans: High Rise or Low? </h1>
        <div className="container flex justify-center">
          <article className="flex flex-wrap justify-center">
            <Response response={response} />
            <Response response={response2} />
            <Response response={response3} />
            <Response response={response4} />
            <Response response={response5} />
            <Response response={response} />
            <Response response={response2} />
            <Response response={response3} />
            <Response response={response4} />
            <Response response={response5} />
            <Response response={response} />
            <Response response={response2} />
            <Response response={response3} />
          </article>
        </div>
      </main>
    </>
  )
}

export default HomePage
