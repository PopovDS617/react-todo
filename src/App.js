import Layout from './components/Layout/Layout';
import TodoPage from './TodoPage/TodoPage';
import DeletedItemsPage from './TodoPage/DeletedItemsPage';

function App() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="todo-module">
          <TodoPage />
        </div>
        <div className="completed-module">
          <DeletedItemsPage />
        </div>
      </div>
    </Layout>
  );
}

export default App;
