--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: profileInformations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."profileInformations" (
    name text NOT NULL,
    nickname text NOT NULL,
    description text NOT NULL,
    specialties text NOT NULL,
    thank text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."profileInformations" OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: profileInformations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."profileInformations" (name, nickname, description, specialties, thank, "userId") FROM stdin;
Pedro	sdvsvsdv	Vascaino, apaixonado pela família e por competir	não tatuo hihi	Obrigado por me escolher !!	24
Pedro Rondelli	Rondelli	Vascaino, apaixonado pela família e por competir	preto e cinza	Obrigado por me escolher !!	23
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
23	pedrorondelli@hotmail.com	$2b$10$VUat2Bu1zAqMVNHZUzdyeeRyCYeGklRdDgMu6DzsPaKCZmByx5h7G
24	barbosa.almeida.leonardo@hotmail.com	$2b$10$3g4pBzZT29O27n4e6KDNwOSU4efGwt7i/bVuvmvT8IcjceSG91Si2
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 24, true);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: profileInformations profileInformations_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."profileInformations"
    ADD CONSTRAINT "profileInformations_fk0" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

