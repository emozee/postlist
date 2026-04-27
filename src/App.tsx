
import { PostsList } from "./post-list";
import { RandomDog } from "./random-dog";

function App() {
  return (
    <main 
      className="min-h-screen w-full relative flex flex-col items-center justify-start gap-10 p-10 overflow-y-auto"
      style={{ 
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Keeps the flag still while you scroll
        backgroundPosition: 'center'
      }}
    >
      {/* Background Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      
      {/* Row 2: The Dog and the User List */}
      <div className="relative z-10 flex flex-row flex-wrap items-start justify-center gap-10 w-full max-w-6xl">
        <RandomDog />
        <div className="flex-1 min-w-[300px]">
          <PostsList />
        </div>
      </div>
    </main>
  );
}

export default App;