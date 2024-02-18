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
        df = pd.read_csv("/path/to/file")
        table = "user_subscription"
        sql = f"""
                CREATE TABLE {table} (
            user_id INT
            subscribed_articles VARCHAR(200000),
            embeddings VECTOR(DOUBLE, 768)
        )
                """
        result = conn.execute(text(sql))
        model = SentenceTransformer('all-mpnet-base-v2')
        embeddings = model.encode(df['description'].tolist(), normalize_embeddings=True)

        df['embeddings'] = embeddings.tolist()
        for index, row in df.iterrows():
            sql = text(f"""
                INSERT OR UPDATE INTO {table}
                (user_id, subscribed_articles, subscribed_articles) 
                VALUES (:embeddings, TO_VECTOR(:embeddings))
            """)
            res = conn.execute(sql, {
                'subscribed_articles': row['subscribed_articles'], 
                'embeddings': str(row['embeddings'])
            })
        search_vector = model.encode(data, normalize_embeddings=True).tolist() # Convert search phrase into a vector
        sql = text(f"""
        SELECT TOP 2 *,
            VECTOR_DOT_PRODUCT(description_vector, TO_VECTOR(:search_vector)) /
            (LENGTH(description_vector) * LENGTH(TO_VECTOR(:search_vector))) AS normalized_dot_product
        FROM {table}
        WHERE VECTOR_DOT_PRODUCT(description_vector, TO_VECTOR(:search_vector)) > 0.5
        ORDER BY normalized_dot_product DESC
        """)
        results = conn.execute(sql, {'search_vector': str(search_vector)}).fetchall()
        trans.commit()
        return results
    except:
        trans.rollback()
        raise
    finally:
        conn.close()