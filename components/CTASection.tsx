/* @format */

export function CTASection() {
  return (
    <section className='overflow-hidden relative shadow-xl rounded-3xl py-16 md:py-24 px-8 md:px-12 text-center max-w-4xl mx-8 lg:mx-auto my-16'>
      <div className='absolute -left-20 -top-20 blur-3xl p-20 rounded-full bg-gradient-to-r from-emerald-100 to-indigo-100 ' />
      <div className='absolute -right-20 top-20 blur-3xl p-20 rounded-full bg-purple-100 ' />
      <div className='absolute -bottom-32 left-32 blur-3xl p-20 rounded-full bg-blue-100' />
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-primary'>
        Jetzt Ferienwohnung in Gera buchen
      </h2>
      <p className='text-muted-foreground mb-6 max-w-xl mx-auto'>
        Entdecken Sie jetzt unsere exklusiven Angebote und finden Sie Ihr
        perfektes Zuhause in Gera.
      </p>
      <a
        href='/apartments'
        className='inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-colors'>
        Ferienwohnung Buchen
      </a>
    </section>
  )
}
