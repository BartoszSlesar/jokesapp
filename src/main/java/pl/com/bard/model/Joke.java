package pl.com.bard.model;

public class Joke {
    private Long id;
    private String joke;

    public Joke(String joke) {
        this.joke = joke;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }
}
