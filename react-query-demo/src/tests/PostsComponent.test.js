import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "../PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Prevent retrying failed requests during tests
    },
  },
});

// Mock fetch response
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: "Test Post" }]),
  })
);

test("renders loading state initially", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("renders fetched posts", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );

  await waitFor(() => expect(screen.getByRole("list")).toBeInTheDocument());
  expect(screen.getByText("Test Post")).toBeInTheDocument();
});
