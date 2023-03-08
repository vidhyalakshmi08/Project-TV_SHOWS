package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Television")
public class Television {
@Id
@GeneratedValue
private int id;

private String cname;

private String pname;

private int year;

private String lead_actor;

private int channelno;

private int episodes;

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getCname() {
	return cname;
}

public void setCname(String cname) {
	this.cname = cname;
}

public String getPname() {
	return pname;
}

public void setPname(String pname) {
	this.pname = pname;
}

public int getYear() {
	return year;
}

public void setYear(int year) {
	this.year = year;
}

public String getLead_actor() {
	return lead_actor;
}

public void setLead_actor(String lead_actor) {
	this.lead_actor = lead_actor;
}

public int getChannelno() {
	return channelno;
}

public void setChannelno(int channelno) {
	this.channelno = channelno;
}

public int getEpisodes() {
	return episodes;
}

public void setEpisodes(int episodes) {
	this.episodes = episodes;
}

public Television(int id, String cname, String pname, int year, String lead_actor, int channelno, int episodes) {
	super();
	this.id = id;
	this.cname = cname;
	this.pname = pname;
	this.year = year;
	this.lead_actor = lead_actor;
	this.channelno = channelno;
	this.episodes = episodes;
}

public Television() {}

}
