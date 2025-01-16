import ExampleForm from "./components/ExampleForm";
import Error from "./components/feedback/Error";
import Loading from "./components/feedback/Loading";
import Spinner from "./components/feedback/Spinner";
import ArticleSkeleton from "./components/skeleton/ArticleSkeleton";
import CardSkeleton from "./components/skeleton/CardSkeleton";
import CommentSkeleton from "./components/skeleton/CommentSkeleton";
import DashboardSkeleton from "./components/skeleton/DashboardSkeleton";
import GridSkeleton from "./components/skeleton/GridSkeleton";
import ProfileSkeleton from "./components/skeleton/ProfileSkeleton";
import TableRowSkeleton from "./components/skeleton/TableRowSkeleton";
import Container from "./components/utils/Container";
import Header from "./components/utils/Header";
import MainLayout from "./layouts/MainLayout";

const demoUser = {
  name: "John Doe",
  email: "john@example.com",
  image: "https://github.com/shadcn.png",
};
const App = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-2xl">
      <MainLayout user={demoUser}>
        <Container>
          <Header
            title="Welcome to Your Website"
            subtitle="Discover our amazing features and services with our beautifully animated headers"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Feature 1
                </h3>
                <p className="text-sm text-muted-foreground">
                  Description of feature 1
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Feature 2
                </h3>
                <p className="text-sm text-muted-foreground">
                  Description of feature 2
                </p>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <Header
            title="Our Services"
            subtitle="Explore the range of services we offer to meet your needs, highlighted by our new animated section headers"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Service 1</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Description of service 1
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Service 2</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Description of service 2
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold">Service 3</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Description of service 3
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Spinners</h2>
            <div className="flex items-center gap-8">
              <Spinner size="sm" />
              <Spinner size="default" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Loading States</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Loading size="default" textPosition="bottom" />
              <Loading size="lg" textPosition="right" text="Processing..." />
              <Loading size="xl" textPosition="top" text="Please wait..." />
            </div>
          </section>
          <section className="space-y-4 mx-auto">
            <h2 className="text-2xl font-bold">Error States</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Error />
              <Error
                title="Connection Error"
                message="Please check your internet connection and try again."
                action={{
                  label: "Retry",
                  onClick: () => alert("Retrying..."),
                }}
              />
            </div>
          </section>
        </Container>
        <Container>
          <div className="space-y-12 p-6">
            {/* Card Skeleton */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Card Skeleton</h2>
              <CardSkeleton />
            </div>

            {/* Table Row Skeleton */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Table Row Skeleton</h2>
              <TableRowSkeleton />
            </div>

            {/* Dashboard Skeleton */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Dashboard Skeleton</h2>
              <DashboardSkeleton />
            </div>

            {/* Article Skeleton */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Article Skeleton</h2>
              <ArticleSkeleton />
            </div>

            {/* Profile Skeleton */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Profile Skeleton</h2>
              <ProfileSkeleton />
            </div>

            {/* Comment Skeleton */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Comment Skeleton</h2>
              <CommentSkeleton />
            </div>

            {/* Grid Skeleton */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Grid Skeleton</h2>
              <GridSkeleton />
            </div>
          </div>
        </Container>
        <Container>
          <ExampleForm />
        </Container>
      </MainLayout>
    </div>
  );
};

export default App;
