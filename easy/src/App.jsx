function App() {
  return (
    <>
      <div className="flex lg:flex-row sm:flex-col justify-evenly m-14 gap-4">
        
        <div className="bg-slate-300 mx-auto h-auto w-3/4 p-4 rounded-lg border border-slate-400">
          <div className="flex items-center space-x-6 p-6">
            
            <div className="flex-shrink-0 p-4">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267_1280.png"
                alt="Photo"
                className="rounded-lg object-contain h-48 w-48"
              />
            </div>

            
            <div>
              <h2 className="text-2xl font-bold mb-2 text-yellow-100">Photo Title</h2>
              <h3 className="text-lg font-semibold mb-1 text-white">Subtitle or Author</h3>
              <p className="text-gray-600">
                This is some detailed information about the photo. You can add a description, credits, or any other content related to the photo here.
              </p>
              <div className="flex items-center justify-between mt-7">
                
                <span className="text-lg font-medium text-gray-700">Rs 500/month</span>

                
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-blue-600 transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-slate-300 mx-auto h-auto w-3/4 p-4 rounded-lg border border-slate-400">
          <div className="flex items-center space-x-6 p-6">
            
            <div className="flex-shrink-0 p-4">
              <img
                src="https://cdn.pixabay.com/photo/2022/01/19/09/26/elon-musk-6949267_1280.png"
                alt="Photo"
                className="rounded-lg object-contain h-48 w-48"
              />
            </div>

            
            <div>
              <h2 className="text-2xl font-bold mb-2 text-yellow-100">Photo Title</h2>
              <h3 className="text-lg font-semibold mb-1 text-white">Subtitle or Author</h3>
              <p className="text-gray-600">
                This is some detailed information about the photo. You can add a description, credits, or any other content related to the photo here.
              </p>
              <div className="flex items-center justify-between mt-7">
                
                <span className="text-lg font-medium text-gray-700">Rs 500/month</span>

                
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-blue-600 transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;