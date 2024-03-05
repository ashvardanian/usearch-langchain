import { USearch } from "@langchain/community/vectorstores/usearch";
import { OpenAIEmbeddings } from "@langchain/openai";
import { TextLoader } from "@langchain/community/document_loaders/fs/text";

// Create docs with a loader
const loader = new TextLoader("README.md");
const docs = await loader.load();

// Load the docs into the vector store
const vectorStore = await USearch.fromDocuments(docs, new OpenAIEmbeddings());

// Search for the most similar document
const resultOne = await vectorStore.similaritySearch("hello world", 1);
console.log(resultOne);
