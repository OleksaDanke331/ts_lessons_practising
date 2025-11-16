import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendingList from "./components/TrendingList";
import { BlogProvider } from "./shared/BlogContext";
import { useState } from "react";
import type { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";
//1:13:38 - start watching
//1:38:00

const App = () => {
  // state for control visibility modal window
  const [isModalOpen, setModalOpen] = useState(false);
  //state, which save state for editing
  const [editingBlog, setEdiginBlog] = useState<Blog | null>(null);

  //function for opening modal window on adding new states
  const openmodelForNewBlog = () => {
    setEdiginBlog(null);
    setModalOpen(true);
  };

  //function for opening modal window on editing existing states
  const openModelForEdit = (blog: Blog) => {
    setEdiginBlog(blog); //put state, which needed to edit
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openmodelForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />{" "}
              </button>

              <ArticleList onEdit={openModelForEdit} />

              {isModalOpen && ( //Conditional rendering of the modal window
                // Modal accepts BlogForm as its children
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog} // Passing the object for editing
                    onClose={() => setModalOpen(false)} // Modal window closing function
                  />
                </Modal>
              )}
            </div>
          </section>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendingList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
