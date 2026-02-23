export default function Redes() {
  return (
    <ul
      className="flex w-fit mx-auto gap-4 p-3 rounded-full 
                   bg-gradient-to-r 
                   from-purple-500 
                   via-blue-600 
                   to-teal-400"
                   /* slate + indigo + purple */
                   /* stone + emerald + zinc */
                   /* dark + orange + amber */
    >
      <li
        className="w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/20"
      >
        IG
      </li>
      <li
        className="w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/20"
      >
        FB
      </li>
      <li
        className="w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/20"
      >
        YT
      </li>
      <li
        className="w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/20"
      >
        X
      </li>
      <li
        className="w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/20"
      >
        IN
      </li>
    </ul>
  );
}
