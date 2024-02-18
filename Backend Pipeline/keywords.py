from llama_index import SimpleDirectoryReader, StorageContext, ServiceContext
from llama_index.indices.vector_store import VectorStoreIndex
import openai
from llama_iris import IRISVectorStore
import getpass
import os
from dotenv import load_dotenv
import os
from testcontainers.iris import IRISContainer
import textwrap

def get_keywords(context, query=""): # optional query
    load_dotenv(override=True)
    if not os.environ.get("OPENAI_API_KEY"):
        os.environ["OPENAI_API_KEY"] = getpass.getpass("OpenAI API Key:")
    with open('data/data.txt', 'w') as file:
        file.write(context)
    documents = SimpleDirectoryReader("data").load_data()

    license_key = None
    image = 'intersystemsdc/iris-community:2024.1-preview'

    container = IRISContainer(image, username="demo", password="demo", namespace="demo", license_key=license_key)
    container.with_exposed_ports(1972, 52773)
    container.start()
    CONNECTION_STRING = container.get_connection_url("localhost")

    vector_store = IRISVectorStore.from_params(
        connection_string=CONNECTION_STRING,
        table_name="test",
        embed_dim=1536,
    )

    storage_context = StorageContext.from_defaults(vector_store=vector_store)

    index = VectorStoreIndex.from_documents(
        documents, 
        storage_context=storage_context, 
        show_progress=True, 
    )
    query_engine = index.as_query_engine()
    response = query_engine.query("Write keywords that describe the context of this article, and would be beneficial for finding very similar articles by a keyword search. Write about 2 keywords, each of one word only. If you alsio get a query, your keywords sshould also take a question into consideration. Your query is" + query + ". You do not have to answer this query but your keywords should give special emphasis on that to find similiar articles. Overall, the keywords should be specific to the query and then the context. Take a deep breath and do this task.")
    return textwrap.fill(str(response), 100)