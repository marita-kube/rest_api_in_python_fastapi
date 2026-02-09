"""Database Connection"""
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///./webapp.db"

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False},
                       )
AsyncSessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False,)

class Base(DeclarativeBase):
    pass

async def get_db():
    session = AsyncSessionLocal()
    try:
        yield session
    finally:
        session.close()