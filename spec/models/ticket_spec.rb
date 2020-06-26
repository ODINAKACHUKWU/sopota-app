require 'rails_helper'

RSpec.describe Ticket, type: :model do
  let(:user) {
    User.create(email: "jane@doe.com", password: "pw1234")
  }

  subject { described_class.new(subject: "My first issue", 
                                description: "I need a guide", 
                                department: "Support",
                                user_id: user.id) }

  describe "validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end
  
    it "is not valid without a subject" do
      subject.subject = nil
      expect(subject).to_not be_valid
    end
  
    it "is not valid without a description" do
      subject.description = nil
      expect(subject).to_not be_valid
    end
  
    it "is not valid without a department" do
      subject.department = nil
      expect(subject).to_not be_valid
    end
  
    it "is not valid without a user id" do
      subject.user_id = 2
      expect(subject).to_not be_valid
    end
  end
  
  describe "Associations" do
    it { should belong_to(:user) }
    it { should have_many(:comments) }
  end
end
