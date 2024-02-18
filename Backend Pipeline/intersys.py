import pandas as pd
from sentence_transformers import SentenceTransformer
from sqlalchemy import create_engine, text

def search(data):
    username = 'SUPERUSER'
    password = 'password'
    hostname = 'localhost' 
    port = '1972' 
    namespace = 'USER'
    CONNECTION_STRING = f"iris://{username}:{password}@{hostname}:{port}/{namespace}"
    engine = create_engine(CONNECTION_STRING)
    conn = engine.connect()
    trans = conn.begin()

    try:
        df = pd.read_csv("/Users/ayaan/Downloads/docs2.csv")
        table = "articles_db"
        sql = f"""
                CREATE TABLE {table} (
            description VARCHAR(200000),
            description_vector VECTOR(DOUBLE, 768)
        )
                """
        result = conn.execute(text(sql))
        model = SentenceTransformer('all-mpnet-base-v2')
        embeddings = model.encode(df['description'].tolist(), normalize_embeddings=True)

        df['description_vector'] = embeddings.tolist()
        for index, row in df.iterrows():
            sql = text(f"""
                INSERT OR UPDATE INTO {table}
                (description, description_vector) 
                VALUES (:description, TO_VECTOR(:description_vector))
            """)
            res = conn.execute(sql, {
                'description': row['description'], 
                'description_vector': str(row['description_vector'])
            })
        search_vector = model.encode(data, normalize_embeddings=True).tolist() # Convert search phrase into a vector
        sql = text(f"""
            SELECT TOP 2 * FROM {table}
            ORDER BY VECTOR_DOT_PRODUCT(description_vector, TO_VECTOR(:search_vector)) DESC
        """)
        results = conn.execute(sql, {'search_vector': str(search_vector)}).fetchall()
        trans.commit()
        return results
    except:
        trans.rollback()
        raise
    finally:
        conn.close()
    

if __name__ == '__main__':
    # test case
    res = search("""COSMOS AND SPACE""")
    for i in range(2):
        print(res[i][0])