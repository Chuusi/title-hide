import './App.css'

function App() {

  window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

  return (
    <>
      <div className="container">
        <div className='text-container'>
          <h1 className='title'>TÍTULO QUE DESAPARECE</h1>
        </div>
      </div>
      <div className='scroll-container'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, hic sapiente recusandae nulla quia placeat iste labore omnis totam praesentium nesciunt sint pariatur molestiae laborum voluptate ducimus nihil, voluptatem mollitia.
        Minima cupiditate, doloremque accusamus commodi temporibus natus numquam ullam quidem autem impedit perferendis ipsa eos sunt harum neque distinctio veniam atque vel ratione omnis illum ipsam modi sint nam? Illo?
        Excepturi et quos ullam iure quo temporibus debitis saepe impedit sapiente voluptas illum nulla dolores, distinctio mollitia non rerum unde iusto aliquam corporis voluptate fugiat. Perferendis dicta explicabo nam voluptatibus.
        Sed architecto voluptatem inventore maxime laborum provident est. Deleniti facilis eum sequi rerum sapiente, quo atque commodi veniam, quae sit aliquam eveniet doloremque amet quasi repudiandae? Molestiae magni ipsum sint.
        Facere labore reprehenderit dolorem ducimus quisquam est magnam quidem, natus quas delectus nesciunt illo rerum consectetur qui porro illum. Molestias libero perspiciatis blanditiis itaque at minus sit cumque commodi consequuntur.</p>
      </div>
    </>
  )
}

export default App
